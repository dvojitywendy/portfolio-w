// Generate human-readable content files from the parsed manifest.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = dirname(fileURLToPath(import.meta.url));
const manifest = JSON.parse(readFileSync(join(ROOT, 'content', 'projects.json'), 'utf8'));

const contact = {
  name: 'Ludmila Kellerová',
  alias: 'DvojityWendy',
  role: 'Graphic Designer',
  email: 'kellerova@gmail.com',
  phone: '+420 778 088 817',
  whatsapp: 'https://wa.me/420778088817',
  links: {
    linkedin: 'https://www.linkedin.com/in/ludmilakellerova/',
    behance: 'https://www.behance.net/ludmilakellerov',
    github: 'https://github.com/dvojitywendy',
    poems: 'https://dvojitywendy.github.io/poe/',
  },
  source: 'https://kellerova.myportfolio.com/',
};
writeFileSync(join(ROOT, 'content', 'contact.json'), JSON.stringify(contact, null, 2));

// Per-project markdown + a combined SUMMARY.md
let summary = `# Ludmila Kellerová — Portfolio (scraped content)\n\n`;
summary += `Source: ${contact.source}\n\n`;
summary += `Identity: **${contact.name}** ("${contact.alias}") — ${contact.role}\n\n`;
summary += `${manifest.length} projects. Assets live in \`scrape/assets/<folder>/\`.\n\n---\n`;

for (const p of manifest) {
  const imgs = p.items.filter(i => i.type === 'image');
  const vids = p.items.filter(i => i.type === 'video');
  let md = `# ${p.title}\n\n`;
  md += `- **Slug:** \`${p.slug}\`\n- **Date:** ${p.date}\n- **Assets folder:** \`scrape/assets/${p.folder}/\`\n`;
  md += `- **Counts:** ${imgs.length} image(s)` + (vids.length ? `, ${vids.length} video(s)` : '') + `\n\n`;
  if (p.description) md += `## Description\n\n${p.description}\n\n`;
  md += `## Content (in order)\n\n`;
  for (const it of p.items) {
    if (it.type === 'image') md += `- 🖼️  \`${it.file}\`${it.width ? ` (${it.width}px wide)` : ''}\n`;
    else if (it.type === 'text') md += `- 📝  _"${it.text}"_\n`;
    else if (it.type === 'video') md += `- 🎬  \`${it.file}\` (1080p, Adobe CCV id ${it.ccv})\n`;
  }
  md += `\n`;
  writeFileSync(join(ROOT, 'content', `${p.folder}.md`), md);

  summary += `\n## ${p.title} (${p.date})\n\n`;
  summary += `\`${p.folder}/\` — ${imgs.length} image(s)${vids.length ? ` + ${vids.length} video` : ''}\n\n`;
  if (p.description) summary += `> ${p.description}\n\n`;
  const captions = p.items.filter(i => i.type === 'text').map(i => i.text);
  if (captions.length) summary += `Captions: ${captions.map(c => `"${c}"`).join('; ')}\n\n`;
}
writeFileSync(join(ROOT, 'content', 'SUMMARY.md'), summary);
console.log('Wrote content/contact.json, content/SUMMARY.md, and per-project .md files');
