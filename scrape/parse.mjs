// Parse the downloaded Adobe Portfolio HTML pages into a structured manifest.
// No external deps — careful regex + a tiny balanced-div reader.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = dirname(fileURLToPath(import.meta.url));
const RAW = join(ROOT, 'raw-html');

// Project slugs in gallery order (from index.html), with their display dates.
const PROJECTS = [
  { slug: 'the-spark-my-works-from-procreate-course', folder: 'the-spark', date: '2025' },
  { slug: 'coffee-fundraiser-campaign',               folder: 'coffee-fundraiser', date: '2026' },
  { slug: 'drawing-paintings',                        folder: 'drawing-paintings', date: '2026' },
  { slug: 'web-vyuka-jazyku-graphics-and-css',        folder: 'web-vyuka-jazyku', date: '2026' },
  { slug: 'global-hackathon-2019-video-ai-use-in-polarion-alm', folder: 'global-hackathon-2019', date: '2026' },
];

function decode(s) {
  return s
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ').replace(/&uacute;/g, 'ú').replace(/&#x[0-9a-fA-F]+;/g, m =>
      String.fromCodePoint(parseInt(m.slice(3, -1), 16)))
    .replace(/&#\d+;/g, m => String.fromCodePoint(parseInt(m.slice(2, -1), 10)));
}
const stripTags = (s) => decode(s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());

// Return index just past the matching </div> for a <div starting at `start`.
function matchDiv(html, start) {
  let i = start, depth = 0;
  const re = /<\/?div\b[^>]*>/gi;
  re.lastIndex = start;
  let m;
  while ((m = re.exec(html))) {
    if (m[0].startsWith('</')) { depth--; if (depth === 0) return re.lastIndex; }
    else depth++;
    i = re.lastIndex;
  }
  return html.length;
}

// Pick highest-resolution URL from a data-srcset / data-src pair.
function bestImage(tag) {
  const srcset = (tag.match(/data-srcset="([^"]*)"/) || [])[1];
  if (srcset) {
    let best = null, bestW = -1;
    for (const part of srcset.split(',')) {
      const m = part.trim().match(/^(\S+)\s+(\d+)w$/);
      if (m && +m[2] > bestW) { bestW = +m[2]; best = m[1]; }
    }
    if (best) return { url: decode(best), width: bestW };
  }
  const src = (tag.match(/data-src="([^"]*)"/) || [])[1];
  return src ? { url: decode(src), width: null } : null;
}

const extOf = (url) => {
  const m = url.split('?')[0].match(/\.([a-z0-9]+)$/i);
  return m ? m[1].toLowerCase() : 'jpg';
};

const manifest = [];
for (const proj of PROJECTS) {
  const html = readFileSync(join(RAW, proj.slug + '.html'), 'utf8');
  const title = stripTags((html.match(/<h1 class="title preserve-whitespace">([\s\S]*?)<\/h1>/) || [])[1] || proj.slug);
  const description = stripTags((html.match(/<p class="description">([\s\S]*?)<\/p>/) || [])[1] || '');

  // Limit scan to the <main> content area.
  const mainStart = html.indexOf('<main>');
  const mainEnd = html.indexOf('</main>');
  const body = html.slice(mainStart, mainEnd > 0 ? mainEnd : html.length);

  // Collect ordered anchors: images, text blocks, videos.
  const anchors = [];
  for (const m of body.matchAll(/<img\b[^>]*\bdata-src="https:\/\/cdn\.myportfolio\.com[^>]*>/gi))
    anchors.push({ idx: m.index, kind: 'image', raw: m[0] });
  for (const m of body.matchAll(/<div class="rich-text[^"]*"/gi))
    anchors.push({ idx: m.index, kind: 'text' });
  for (const m of body.matchAll(/<iframe\b[^>]*ccv\/([^/]+)\/embed[^>]*>/gi))
    anchors.push({ idx: m.index, kind: 'video', ccv: m[1] });
  anchors.sort((a, b) => a.idx - b.idx);

  const items = [];
  let imgN = 0;
  for (const a of anchors) {
    if (a.kind === 'image') {
      const best = bestImage(a.raw);
      if (!best) continue;
      imgN++;
      const ext = extOf(best.url);
      items.push({
        type: 'image',
        n: imgN,
        file: String(imgN).padStart(2, '0') + '.' + ext,
        url: best.url,
        width: best.width,
      });
    } else if (a.kind === 'text') {
      const end = matchDiv(body, a.idx);
      const text = stripTags(body.slice(a.idx, end));
      if (text) items.push({ type: 'text', text });
    } else if (a.kind === 'video') {
      items.push({ type: 'video', ccv: a.ccv, file: 'video.mp4' });
    }
  }

  manifest.push({ ...proj, title, description, items });
  const imgs = items.filter(i => i.type === 'image').length;
  const txt = items.filter(i => i.type === 'text').length;
  const vid = items.filter(i => i.type === 'video').length;
  console.log(`${proj.folder.padEnd(22)} "${title}"  -> ${imgs} img, ${txt} text, ${vid} video`);
}

writeFileSync(join(ROOT, 'content', 'projects.json'), JSON.stringify(manifest, null, 2));

// Flat download list for images: folder<TAB>file<TAB>url
const lines = [];
for (const p of manifest)
  for (const it of p.items)
    if (it.type === 'image') lines.push([p.folder, it.file, it.url].join('\t'));
writeFileSync(join(ROOT, 'content', 'image-downloads.tsv'), lines.join('\n') + '\n');
console.log(`\nTotal images to download: ${lines.length}`);
console.log('Wrote content/projects.json and content/image-downloads.tsv');
