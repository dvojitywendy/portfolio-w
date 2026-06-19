/* ===========================================================================
   Ludmila Kellerová — DvojityWendy · Portfolio
   Framework-free recreation of the Sin City / noir design.
   Bilingual (CZ/EN), hash-routed SPA. Static — GitHub Pages safe.
   =========================================================================== */
(function () {
  'use strict';

  /* ---------- content (verbatim from the design) ---------- */

  const DATA = [
    {
      slug: 'the-spark', folder: 'the-spark', year: '2025',
      medium: { en: 'Procreate for iPad · Digital Painting', cz: 'Procreate for iPad · Digitální malba' },
      title: { en: 'The Spark', cz: 'Jiskra' },
      desc: {
        en: "Homework from the Procreate course by SKVOT Czech, April 2025 — the spark that lit all my work in Procreate. The final project: The koi carps - my first real digital painting.",
        cz: "Domácí úkoly z kurzu Procreate od SKVOT Czech, duben 2025 — jiskra, která zažehla moji práci v Procreate. Finální projekt kurzu: Koi kapři - moje první opravdová digitální malba."
      },
      images: [
        { f: 'assets/the-spark/01.png', cap: null },
        { f: 'assets/the-spark/03.png', cap: null },
        { f: 'assets/the-spark/02.png', cap: null },
        { f: 'assets/the-spark/06.png', cap: null },
        { f: 'assets/the-spark/05.png', cap: null },
         { f: 'assets/the-spark/08.png', cap: { cz: 'Příspěvek do soutěže Tvořit svět po svém #TvořitSvětPoSvém', en: 'My admission for the contest Create your own world #TvořitSvětPoSvém' } },
         { f: 'assets/the-spark/09.png', cap: { en: 'When you run out of coffee and all you find is a nettle tea', cz: 'Když vám dojde kafe a jediné co máte je kopřivový čaj' } },
        { f: 'assets/the-spark/07.png', cap: { en: 'Final project — the koi carps', cz: 'Závěrečný projekt — koi kapři' } }
      ],
      cover: 'assets/the-spark/07.png', video: null
    },
    {
      slug: 'coffee-fundraiser', folder: 'coffee-fundraiser', year: '2023',
      medium: { en: 'Pixlr · MS Clickchamp · Poster & Film', cz: 'Pixlr · MS Clickchamp · Plakát & film' },
      title: { en: 'Office Coffee Fundraiser', cz: 'Kávová sbírka' },
      desc: {
        en: "An unofficial fundraiser I founded at work — coffee, community, and a small revolution. I edited the video and designed the posters. The Intelligentsia logo is the partner brand's; used only internally, non-commercially. For the video creation I used free video sequences and combined them with AI generated sequences in HeyGen. Video editing tool - MS Clickchamp, the rest of graphic work was done using Pixlr.",
        cz: "Neoficiální sbírka, kterou jsem ve firmě založila — káva, komunita a malá revoluce. Sestříhala jsem video a navrhla plakáty. Logo Intelligentsia patří partnerské značce; použito pouze interně, nekomerčně. Pro tvrobu videa jsem použila volně dostupné video sekvence a AI generované video v HeyGen. Nástroj pro video editaci - MS Clickchamp, na zbylé grafické práce jsem použila Pixlr."
      },
      images: [
        { f: 'assets/coffee-fundraiser/01.png', cap: null },
        { f: 'assets/coffee-fundraiser/02.png', cap: null },
        { f: 'assets/coffee-fundraiser/03.png', cap: null },
        { f: 'assets/coffee-fundraiser/04.png', cap: null },
        { f: 'assets/coffee-fundraiser/05.png', cap: null }
      ],
      cover: 'assets/coffee-fundraiser/04.png',
      video: { src: 'assets/coffee-fundraiser/video.mp4', poster: 'assets/coffee-fundraiser/01.png', title: { en: 'The Campaign Video', cz: 'Video kampaně' } }
    },
     {
      slug: 'book-illustration', folder: 'book-illustration', year: '2013',
      medium: { en: 'Adobe Photoshop · Book cover illustration', cz: 'Adobe Photoshop · Ilustrace na obálku knihy' },
      title: { en: 'Book cover illustration', cz: 'Ilustrace na obálce' },
      desc: {
        en: "In the beginning there was a book. And that book has its cover illustration missing and has a tight deadline. So I created one in Adobe Photoshop. And my university friend could publish the book the next day.",
        cz: "Na počátku byla kniha. A té knize chyběl obrázek na obálku a měla šibeniční termín vydání. Tak jsem ji jeden vytvořila v Adobe Photoshop. A kamarádka z univerzity mohla druhý den vydávat."
      },
      images: [
        { f: 'assets/book-illustration/02.png', cap: null },
        { f: 'assets/book-illustration/01.png', cap: null }
      ],
      cover: 'assets/book-illustration/01.png', video: null
    },
    {
      slug: 'drawing-paintings', folder: 'drawing-paintings', year: '2021–25',
      medium: { en: 'Paper · Pencil · Acrylic · Ink · Watercolour', cz: 'Papír · Tužka · Akryl · Tuš · Akvarel' },
      title: { en: 'Drawing & Paintings', cz: 'Kresby & malby' },
      desc: {
        en: "I love paper as a physical medium hence I create also drawings and paintings. Some of these were done in courses at Ateliér Mozaika and during my free time. Used media:pencil, coloured pencil, acrylic, ink and watercolour.",
        cz: "Miluju papír jako fyzické médium, a proto tvořím i kresby a malby. Tohle jsou některé výstupy z kurzů Ateliéru Mozaika a mých volnočasových aktivit. Použitá média: tužka, pastelky, akryl, tuš a akvarel."
      },
      images: [
        { f: 'assets/drawing-paintings/01.jpg', cap: null }, { f: 'assets/drawing-paintings/03.png', cap: null },
        { f: 'assets/drawing-paintings/02.jpg', cap: null }, { f: 'assets/drawing-paintings/04.jpg', cap: null },
        { f: 'assets/drawing-paintings/05.jpg', cap: null }, { f: 'assets/drawing-paintings/06.jpg', cap: null },
        { f: 'assets/drawing-paintings/07.jpg', cap: null }, { f: 'assets/drawing-paintings/08.jpg', cap: null },
        { f: 'assets/drawing-paintings/09.jpg', cap: null }, { f: 'assets/drawing-paintings/10.jpg', cap: null },
        { f: 'assets/drawing-paintings/11.jpg', cap: null }, { f: 'assets/drawing-paintings/12.png', cap: null }
      ],
      cover: 'assets/drawing-paintings/01.jpg', video: null
    },
    {
      slug: 'web-vyuka-jazyku', folder: 'web-vyuka-jazyku', year: '2011',
      medium: { en: 'Adobe Photoshop · CSS · Web Visuals', cz: 'Adobe Photoshop · CSS · Webové vizuály' },
      title: { en: 'Výuka jazyků', cz: 'Výuka jazyků' },
      desc: {
        en: "In the beginning there was a book. In that book, an image — and that image became the whole website that I created CSS styles for. The logos' designs and all the web visuals done in Adobe Photoshop.",
        cz: "Na počátku byla kniha. V té knize byl obrázek, a ten obrázek se stal celým webem, ke kterému jsem tvořila CSS styly. Návrhy na loga a všechny webové vizuály v Adobe Photoshop."
      },
      images: [
        { f: 'assets/web-vyuka-jazyku/02.png', cap: { en: 'Výuka jazyků — CSS and web visual elements, 2011', cz: 'Výuka jazyků — CSS a webové vizuály, 2011' } },
        { f: 'assets/web-vyuka-jazyku/03.png', cap: null },
        { f: 'assets/web-vyuka-jazyku/04.png', cap: null },
        { f: 'assets/web-vyuka-jazyku/01.png', cap: null }
      ],
      cover: 'assets/web-vyuka-jazyku/02.png', video: null
    },
    {
      slug: 'global-hackathon', folder: 'global-hackathon-2017', year: '2017',
      medium: { en: 'Final Cut Pro · Movie', cz: 'Final Cut Pro · Film' },
      title: { en: 'Hackathon Movie', cz: 'Film pro Hackathon' },
      desc: {
        en: "I made the film for our team at the Siemens Global Hackathon 2017: all the shooting, the edit in Final Cut Pro, partially I touched up the script. The goal was showing how AI could help in Polarion ALM — and in our case with fatal consequences. We won 1st prize.",
        cz: "Natočila jsem film pro náš tým na Siemens Global Hackathon 2017: veškeré natáčení, střih ve Final Cut Pro, částečně jsem upravila i scénář. Cílem bylo ukázat, jak může AI v Polarion ALM pomoct - v našem případě s fatálními důsledky. Vyhráli jsme 1. místo."
      },
      images: [],
      cover: 'assets/global-hackathon-2019/cover.jpg',
      video: { src: 'assets/global-hackathon-2019/video.mp4', poster: 'assets/global-hackathon-2019/cover.jpg', title: { en: 'Global Hackathon 2017 · AI in Polarion ALM', cz: 'Global Hackathon 2017 · AI v Polarion ALM' } }
    }
  ];

  const STR = {
    cz: {
      nav_work: 'Práce', nav_about: 'O mně', nav_contact: 'Kontakt', langLabel: 'EN',
      kicker: 'Grafička · Brno', tagline: 'Kreativní duše, která přepisuje tělo automatizační testerky.',
      hero_caption: 'The Spark — koi kapři, 2025', cta_work: 'Prohlédnout práce', cta_story: 'Můj příběh',
      beats: ["Můj životopis říká „softwarová inženýrka.“", "Mezi řádky ale najdete člověka, pro kterého grafika nikdy nebyla jen na okraji stránky."],
      punch: 'Teď ji zarovnávám do středu.',
      featured: 'Vybrané', all_work: 'Všechny práce',
      work_title: 'Práce', view_project: 'Otevřít projekt', back: 'Zpět na práce', prev: 'Předchozí', next: 'Další',
      play: 'Přehrát film',
      video_note: 'Video se přehraje, jakmile bude soubor /assets/.../video.mp4 nahrán na GitHub Pages.',
      about_kicker: 'O mně', about_head: 'Kreativní duše v těle inženýrky.',
      aboutParas: [
        "Dvanáct let můj titul zněl „testerka s automatizací / inženýrka zajištění kvality“. Grafika ale nikdy nebyla koníček na okraji — byla přirozenou součástí každé práce, které jsem se chopila.",
        "V NetSuite jsem z vlastní iniciativy stála za fundraiserem za lepší kávu v office — sestříhala video a navrhla plakáty. U Siemensu jsem měla možnost natočit video v rámci globálního hackathonu. Během sabbaticalu jsem tvořila z papíru a dělala grafiku pro open-source projekt.",
        "S Photoshopem pracuji řadu let, editovala jsem ve Final Cut Pro a žádný grafický program si přede mnou není jistý — když mě něco chytne, zapnu hyperfocus a jdu do hloubky. V roce 2023 jsem absolvovala kurzy v Ateliéru Mozaika, v roce 2024 kurz Midjourney prakticky, v roce 2025 kurz Procreate a zavítala jsem i na brněnskou Brno Bold Typo konferenci. Ve volném čase se kromě kresby a malby věnuji také kaligrafii."
      ],
      about_quip: 'Žádný grafický program si přede mnou není jistý.',
      portrait_note: 'Ludmila Kellerová', toolkit: 'Nástroje', journey: 'Cesta',
      contact_kicker: 'Kontakt', contact_head: 'Pojďme udělat něco hlasitého.', contact_loc: 'Brno, Česká republika',
      close: 'Zavřít', footer: 'Vytvořeno s láskou · 2026'
    },
    en: {
      nav_work: 'Work', nav_about: 'About', nav_contact: 'Contact', langLabel: 'CZ',
      kicker: 'Graphic Designer · Brno', tagline: "A creative soul rewriting the body of a test automation engineer.",
      hero_caption: 'The Spark — koi carps, 2025', cta_work: 'See the work', cta_story: 'My story',
      beats: ["My résumé says “software engineer.”", "But between the lines you'll find someone for whom graphics were never just a note in the margin."],
      punch: "Now I'm aligning it to the center.",
      featured: 'Featured', all_work: 'All work',
      work_title: 'The Work', view_project: 'Open project', back: 'Back to work', prev: 'Previous', next: 'Next',
      play: 'Play the film',
      video_note: 'The film will play once /assets/.../video.mp4 is committed to GitHub Pages.',
      about_kicker: 'About', about_head: "Creative soul, engineer's body.",
      aboutParas: [
        "For twelve years my title said “test automation engineer / quality assurance.” But graphics were never a hobby on the side — they were part of every job I took on.",
        "At NetSuite I founded a coffee fundraiser and made its campaign video and posters. At Siemens I had an opportunity to shoot and edit video entry for the global hackathon. On my sabbatical I crafted paper, and made graphics for an open-source project.",
        "I've worked in Photoshop for years, edited in Final Cut Pro, and no graphics tool is safe around me — when something grabs me, I switch on hyperfocus and go deep. In 2023 I took courses at Ateliér Mozaika, in 2024 Midjourney in practice course, in 2025 a Procreate course, and went to the Brno Bold Typo conference. In my spare time I love drawing, painting and practicing calligraphy."
      ],
      about_quip: 'No graphics tool is safe around me.',
      portrait_note: 'Ludmila Kellerová', toolkit: 'Toolkit', journey: 'The Journey',
      contact_kicker: 'Contact', contact_head: "Let's make something loud.", contact_loc: 'Brno, Czech Republic',
      close: 'Close', footer: 'Made with love · 2026'
    }
  };

  const TIMELINE = {
    cz: [
      { year: '2011', text: 'Webové vizuály a loga — projekt Výuka jazyků.' },
      { year: '2013', text: 'Ilustrace na obálku knihy Transfer znalostí a inovace.' },
      { year: '2017', text: 'Filmový příspěvek pro Siemens Global Hackathon — vítězný.' },
      { year: '2023', text: 'Absolvovala jsem 7 vícedenních kurzů kresby a malby v Ateliéru Mozaika.' },
      { year: '2023', text: 'Kávová sbírka v NetSuite — video a plakáty.' },
      { year: '2024', text: 'Absolvovala jsem kurz Midjourney prakticky.' },
      { year: '2024', text: 'Registrace v OOA-S s ohláškou ilustrace na obálce knihy.' },
      { year: '2025', text: 'Mentorka kurzů akrylové malby v NetSuite.' },
      { year: '2025', text: 'Absolvovala jsem Kurz Procreate (SKVOT).' },
      { year: '2026', text: 'Naplno se vydávám za grafickým designem.' }
    ],
    en: [
      { year: '2011', text: 'Web visuals and logos — the Výuka jazyků project .' },
      { year: '2013', text: 'Illustration for the book cover Transfer znalostí a inovace.' },
      { year: '2019', text: 'Film for the Siemens Global Hackathon — 1st prize.' },
      { year: '2023', text: 'Completed 7 multi-day drawing & painting courses at Ateliér Mozaika.' },
      { year: '2023', text: 'Office Coffee fundraiser at NetSuite — video and posters.' },
      { year: '2024', text: 'Completed Midjourney course.' },
      { year: '2024', text: 'Registered in OOA-S with a book cover illustration.' },
      { year: '2025', text: 'Mentored acrylic-painting courses at NetSuite.' },
      { year: '2025', text: 'Completed Procreate course (SKVOT).' },
      { year: '2026', text: 'Going all in on graphic design.' }
    ]
  };

  const SKILLS = {
    cz: ['Adobe Photoshop', 'Procreate for iPad', 'Final Cut Pro', , 'Kresba & malba', 'Kaligrafie', 'Papírová tvorba', 'Střih videa'],
    en: ['Adobe Photoshop', 'Procreate for iPad', 'Final Cut Pro', 'Drawing & Painting', 'Calligraphy', 'Paper Craft', 'Video Editing']
  };

  const contacts = (lang) => ([
    { label: 'Email', value: 'kellerova@gmail.com', href: 'mailto:kellerova@gmail.com' },
    { label: lang === 'cz' ? 'Telefon' : 'Phone', value: '+420 778 088 817', href: 'tel:+420778088817' },
    { label: 'WhatsApp', value: 'wa.me', href: 'https://wa.me/420778088817' },
    { label: 'LinkedIn', value: 'ludmilakellerova', href: 'https://www.linkedin.com/in/ludmilakellerova/' },
    { label: 'Behance', value: 'ludmilakellerov', href: 'https://www.behance.net/ludmilakellerov' },
    { label: 'GitHub', value: 'dvojitywendy', href: 'https://github.com/dvojitywendy' },
    { label: lang === 'cz' ? 'Básně' : 'Poems', value: 'DvojityWendy', href: 'https://dvojitywendy.github.io/poe/' }
  ]);

  /* ---------- helpers ---------- */

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  // Czech typography: never leave a single-letter preposition/conjunction
  // (k o s u v z a i) dangling at the end of a line — bind it to the next
  // word with a non-breaking space. CZ only; no-op for EN.
  function czFix(s) {
    if (typeof s !== 'string' || state.lang !== 'cz') return s;
    const re = /(^|[\s(„"'])([KkSsVvZzOoUuAaIi])[ \t]+/g;
    let prev;
    do { prev = s; s = s.replace(re, '$1$2 '); } while (s !== prev);
    return s;
  }
  // escape + Czech non-breaking-space fix, for visible prose
  const txt = (s) => esc(czFix(s));
  // localize STR for the current language, with czFix applied to every string
  function localize(lang) {
    const src = STR[lang];
    if (lang !== 'cz') return src;
    const map = (v) => Array.isArray(v) ? v.map(map) : (typeof v === 'string' ? czFix(v) : v);
    const out = {};
    for (const k in src) out[k] = map(src[k]);
    return out;
  }

  let state = {
    lang: (function () { try { return localStorage.getItem('lk_lang') || 'cz'; } catch (e) { return 'cz'; } })(),
    lb: null
  };

  function route() {
    const seg = (location.hash || '#/').replace(/^#\/?/, '').split('/');
    return { view: seg[0] || '', slug: seg[1] || '' };
  }

  function go(h) {
    if (location.hash === h || (h === '#/' && (location.hash === '' || location.hash === '#/'))) {
      state.lb = null; render(); window.scrollTo(0, 0);
    } else {
      location.hash = h; // triggers hashchange
    }
  }

  /* ---------- view builders ---------- */

  function navHtml(t, view) {
    const link = (target, label, key) =>
      `<button class="nav__link${view === key ? ' is-active' : ''}" data-go="${target}">${esc(label)}</button>`;
    return `<nav class="nav">
      <button class="nav__brand" data-go="#/">
        <span>L.K.</span><span class="sep">//</span><span class="alias">DVOJITYWENDY</span>
      </button>
      <div class="nav__links">
        ${link('#/work', t.nav_work, 'work')}
        ${link('#/about', t.nav_about, 'about')}
        ${link('#/contact', t.nav_contact, 'contact')}
        <button class="nav__lang" data-lang>${esc(t.langLabel)}</button>
      </div>
    </nav>`;
  }

  function projectCardsHtml(list) {
    return list.map((p) => `
      <button class="card" data-open="${esc(p.slug)}">
        <img src="${esc(p.cover)}" alt="${esc(p.title[state.lang])}" loading="lazy" decoding="async">
        <div class="card__meta">
          <div class="card__year">${esc(p.year)}</div>
          <div class="card__title">${esc(p.title[state.lang])}</div>
        </div>
      </button>`).join('');
  }

  function homeHtml(t) {
    const featured = DATA.slice(0, 3);
    return `<main class="view">
      <section class="hero">
        <div class="hero__halftone" aria-hidden="true"></div>
        <div class="hero__body">
          <div class="hero__kicker kicker">${esc(t.kicker)}</div>
          <h1 class="hero__title"><span>Ludmila</span><span class="outline">Kellerová</span></h1>
          <div class="hero__slash slash"></div>
          <p class="hero__tagline">${esc(t.tagline)}</p>
          <div class="hero__cta">
            <button class="btn btn--solid" data-go="#/work">${esc(t.cta_work)} →</button>
            <button class="btn btn--ghost" data-go="#/about">${esc(t.cta_story)}</button>
          </div>
        </div>
        <div class="hero__art">
          <div class="frame">
            <img src="assets/the-spark/07.png" alt="Koi carps — digital painting" decoding="async">
            <div class="frame__cap">${esc(t.hero_caption)}</div>
          </div>
        </div>
      </section>

      <section class="narrative">
        <svg class="narrative__mark" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" stroke-width="2.2"/>
          <circle cx="50" cy="50" r="35.5" fill="none" stroke="currentColor" stroke-width="2.2"/>
          <circle cx="50" cy="50" r="23" fill="none" stroke="currentColor" stroke-width="2.2"/>
          <circle cx="50" cy="50" r="10.5" fill="none" stroke="currentColor" stroke-width="2.2"/>
          <circle cx="50" cy="50" r="3.2" fill="currentColor"/>
        </svg>
        <div class="narrative__inner">
          ${t.beats.map((b) => `<div class="beat">${esc(b)}</div>`).join('')}
          <p class="punch">${esc(t.punch)}</p>
        </div>
      </section>

      <section class="featured">
        <div class="featured__head">
          <h2>${esc(t.featured)}</h2>
          <button class="featured__all" data-go="#/work">${esc(t.all_work)} →</button>
        </div>
        <div class="grid3">${projectCardsHtml(featured)}</div>
      </section>
    </main>`;
  }

  function workHtml(t) {
    const rows = DATA.map((p) => `
      <button class="row" data-open="${esc(p.slug)}">
        <div class="row__media"><img src="${esc(p.cover)}" alt="${esc(p.title[state.lang])}" loading="lazy" decoding="async"></div>
        <div class="row__body">
          <div class="row__meta">${esc(p.year)} — ${esc(p.medium[state.lang])}</div>
          <h2>${esc(p.title[state.lang])}</h2>
          <p class="row__desc">${txt(p.desc[state.lang])}</p>
          <span class="row__cta">${esc(t.view_project)} →</span>
        </div>
      </button>`).join('');
    return `<main class="work view">
      <div class="work__head">
        <h1>${esc(t.work_title)}</h1>
        <span class="work__count">[ ${String(DATA.length).padStart(2, '0')} ]</span>
      </div>
      <div class="work__list">${rows}</div>
    </main>`;
  }

  function projectHtml(t, p) {
    const lang = state.lang;
    const idx = DATA.indexOf(p);
    const prev = DATA[(idx - 1 + DATA.length) % DATA.length];
    const next = DATA[(idx + 1) % DATA.length];

    let videoBlock = '';
    if (p.video) {
      const posterImg = p.video.poster ? `<img class="video__poster" src="${esc(p.video.poster)}" alt="" aria-hidden="true">` : '';
      videoBlock = `<div class="video" data-video-src="${esc(p.video.src)}" data-video-poster="${esc(p.video.poster)}" role="button" tabindex="0" aria-label="${esc(p.video.title[lang])}">
          ${posterImg}
          <div class="video__overlay">
            <div class="video__title">${txt(p.video.title[lang])}</div>
            <span class="video__play">▶ ${esc(t.play)}</span>
          </div>
          <span class="video__ratio" aria-hidden="true"></span>
        </div>`;
    }

    const gallery = p.images.length ? `<div class="gallery">
        ${p.images.map((im, i) => {
          const cap = im.cap ? im.cap[lang] : '';
          return `<button class="shot" data-lb="${i}">
            <img src="${esc(im.f)}" alt="${esc(cap || p.title[lang])}" loading="lazy" decoding="async">
            ${cap ? `<div class="shot__cap">${esc(cap)}</div>` : ''}
          </button>`;
        }).join('')}
      </div>` : '';

    return `<main class="project view">
      <button class="project__back" data-go="#/work">← ${esc(t.back)}</button>
      <div class="project__head">
        <div class="project__meta">${esc(p.year)} — ${esc(p.medium[lang])}</div>
        <h1>${esc(p.title[lang])}</h1>
        <p class="project__desc">${txt(p.desc[lang])}</p>
      </div>
      ${videoBlock}
      ${gallery}
      <div class="pager">
        <button class="pager__btn pager__btn--prev" data-open="${esc(prev.slug)}">
          <div class="pager__label">← ${esc(t.prev)}</div>
          <div class="pager__title">${esc(prev.title[lang])}</div>
        </button>
        <button class="pager__btn pager__btn--next" data-open="${esc(next.slug)}">
          <div class="pager__label">${esc(t.next)} →</div>
          <div class="pager__title">${esc(next.title[lang])}</div>
        </button>
      </div>
    </main>`;
  }

  function aboutHtml(t) {
    const lang = state.lang;
    return `<main class="about view">
      <div class="about__top">
        <div>
          <div class="kicker">${esc(t.about_kicker)}</div>
          <h1 class="about__head">${esc(t.about_head)}</h1>
          <div class="about__slash slash"></div>
          ${t.aboutParas.map((p) => `<p class="about__para">${esc(p)}</p>`).join('')}
          <div class="about__quip">${esc(t.about_quip)}</div>
        </div>
        <div class="portrait" style="background-image:url('assets/portrait.jpg')">
          <div class="portrait__note">${esc(t.portrait_note)}</div>
        </div>
      </div>

      <div class="about__section">
        <h2>${esc(t.toolkit)}</h2>
        <div class="skills__list">${SKILLS[lang].map((s) => `<span class="skill">${esc(s)}</span>`).join('')}</div>
      </div>

      <div class="about__section">
        <h2>${esc(t.journey)}</h2>
        <div class="timeline__rail">
          ${TIMELINE[lang].map((r) => `<div class="timeline__row">
            <div class="timeline__year">${esc(r.year)}</div>
            <div class="timeline__text">${txt(r.text)}</div>
          </div>`).join('')}
        </div>
      </div>

      <div class="about__cta">
        <button class="btn btn--solid" data-go="#/work">${esc(t.cta_work)} →</button>
        <button class="btn btn--ghost" data-go="#/contact">${esc(t.nav_contact)}</button>
      </div>
    </main>`;
  }

  function contactHtml(t) {
    const rows = contacts(state.lang).map((c) => `
      <a class="contact-row" href="${esc(c.href)}"${/^https?:/.test(c.href) ? ' target="_blank" rel="noopener"' : ''}>
        <span class="contact-row__text">
          <span class="contact-row__label">${esc(c.label)}</span>
          <span class="contact-row__value">${esc(c.value)}</span>
        </span>
        <span class="contact-row__arrow">↗</span>
      </a>`).join('');
    return `<main class="contact view">
      <div>
        <div class="kicker">${esc(t.contact_kicker)}</div>
        <h1 class="contact__head">${esc(t.contact_head)}</h1>
        <div class="contact__loc"><span class="contact__dot"></span>${esc(t.contact_loc)}</div>
        <div class="contact__sign"><span class="contact__sign-mark">Ink.</span> Ludmila Kellerová</div>
      </div>
      <div class="contacts">${rows}</div>
    </main>`;
  }

  function footerHtml(t) {
    return `<footer class="footer">
      <span>Ludmila Kellerová — DvojityWendy</span>
      <span>${esc(t.footer)}</span>
    </footer>`;
  }

  function lightboxHtml(t) {
    if (!state.lb) return '';
    return `<div class="lightbox" data-close-lb>
      <div class="lightbox__close">${esc(t.close)} ✕</div>
      <figure>
        <img src="${esc(state.lb.src)}" alt="${esc(state.lb.caption || '')}">
        ${state.lb.caption ? `<figcaption>${esc(state.lb.caption)}</figcaption>` : ''}
      </figure>
    </div>`;
  }

  /* ---------- render + wiring ---------- */

  const app = () => document.getElementById('app');

  function render() {
    const t = localize(state.lang);
    const r = route();
    const p = (r.view === 'p') ? DATA.find((x) => x.slug === r.slug) : null;

    let view;
    if (r.view === 'work') view = workHtml(t);
    else if (r.view === 'p' && p) view = projectHtml(t, p);
    else if (r.view === 'about') view = aboutHtml(t);
    else if (r.view === 'contact') view = contactHtml(t);
    else view = homeHtml(t);

    app().innerHTML = navHtml(t, r.view) + view + footerHtml(t) + lightboxHtml(t);

    document.documentElement.lang = state.lang;
    document.body.style.overflow = state.lb ? 'hidden' : '';
    wire(p);
  }

  function wire(activeProject) {
    const root = app();

    root.querySelectorAll('[data-go]').forEach((el) =>
      el.addEventListener('click', () => go(el.getAttribute('data-go'))));

    root.querySelectorAll('[data-open]').forEach((el) =>
      el.addEventListener('click', () => go('#/p/' + el.getAttribute('data-open'))));

    const langBtn = root.querySelector('[data-lang]');
    if (langBtn) langBtn.addEventListener('click', () => {
      state.lang = state.lang === 'cz' ? 'en' : 'cz';
      try { localStorage.setItem('lk_lang', state.lang); } catch (e) {}
      render();
    });

    if (activeProject) {
      root.querySelectorAll('[data-lb]').forEach((el) =>
        el.addEventListener('click', () => {
          const im = activeProject.images[+el.getAttribute('data-lb')];
          state.lb = { src: im.f, caption: im.cap ? im.cap[state.lang] : '' };
          render();
        }));
    }

    const lb = root.querySelector('[data-close-lb]');
    if (lb) lb.addEventListener('click', () => { state.lb = null; render(); });

    root.querySelectorAll('.video').forEach((box) => {
      const play = () => {
        const src = box.getAttribute('data-video-src');
        box.innerHTML = `<video controls autoplay playsinline preload="metadata" src="${esc(src)}"></video>`;
      };
      box.addEventListener('click', play);
      box.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); } });
    });
  }

  // global Escape closes the lightbox
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.lb) { state.lb = null; render(); }
  });

  window.addEventListener('hashchange', () => { state.lb = null; render(); window.scrollTo(0, 0); });

  render();
})();
