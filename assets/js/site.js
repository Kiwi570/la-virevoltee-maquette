/* Effets propres à la Compagnie la Virevoltée (les effets génériques viennent de la bibliothèque du socle).
   Effets du plan (data-effet) : toupie, roue, disque-final, carte-tournee, bandeau, date-disque, portrait-disque, logo-tourne.
   Intro : le disque du logo tourne sur lui-même, glisse jusqu'à la toupie de la page, qui s'ouvre en cercle ;
   le titre arrive en lettres qui tournoient. */
import { demarrer, boucle, versObjet, aller } from './socle/index.js?v=2';
import { init as initAgenda } from './modules/agenda-des-dates.js?v=2';

const gsap = window.gsap;
const ST = () => window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- Vitesse de défilement (partagée) : lue sur scrollY, sans mesure de mise en page. ---------- */
let vitesse = 0, dernierY = window.scrollY;
function suivreVitesse() {
  const tick = () => {
    const y = window.scrollY;
    vitesse += ((y - dernierY) - vitesse) * 0.2;
    dernierY = y;
  };
  if (gsap) gsap.ticker.add(tick);
}

/* ---------- Toupie : l'anneau de texte tourne doucement, plus vite quand on défile. ---------- */
function toupies() {
  $$('.toupie:not(.toupie--jeu)').forEach((t) => {
    const anneau = $('.toupie-anneau', t);
    let angle = 0;
    boucle(t, (dt) => {
      const s = Math.min(0.1, dt);
      angle += s * (14 + Math.min(260, Math.abs(vitesse) * 9));
      anneau.style.transform = `rotate(${angle % 360}deg)`;
    });
  });
}

/* ---------- Titres des ouvertures : lettres qui tournoient. ---------- */
let decoupe = null;
function titreOuverture() {
  const h1 = $('.ouv .titre-geant[data-anime="gsap"]');
  if (!h1 || !window.SplitText) return null;
  if (!decoupe) decoupe = new window.SplitText($$('.l', h1), { type: 'words,chars', wordsClass: 'mot', charsClass: 'lettre' });
  return { h1, lettres: decoupe.chars };
}
function rendreTitre() {
  if (decoupe) { decoupe.revert(); decoupe = null; }
  const h1 = $('.ouv .titre-geant[data-anime="gsap"]');
  if (h1 && gsap) gsap.set(h1, { opacity: 1 });
}
function animerOuverture(tl, debut) {
  const t = titreOuverture();
  if (t) {
    tl.set(t.h1, { opacity: 1 }, 0);
    tl.fromTo(t.lettres, { yPercent: 70, rotation: -28, opacity: 0, transformOrigin: '50% 100%' },
      { yPercent: 0, rotation: 0, opacity: 1, duration: 0.6, stagger: 0.016, ease: 'back.out(1.6)' }, debut);
    tl.call(rendreTitre, null, debut + 0.6 + t.lettres.length * 0.016 + 0.05);
  }
  const ouv = $$('[data-ouv]');
  if (ouv.length) tl.fromTo(ouv, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out' }, debut + 0.25);
  const ronds = $$('.bandeau-ronds li');
  if (ronds.length) tl.fromTo(ronds, { y: 40, rotation: -14, opacity: 0 }, { y: 0, rotation: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'back.out(1.4)' }, debut + 0.2);
  tl.call(() => document.documentElement.classList.add('ouv-pret'), null, debut + 1.1);
  return tl;
}


/* ---------- Toupie de l'accueil : on l'attrape, on la lance ; en tournant elle déroule des rubans aux couleurs de la jupe. ---------- */
const COULEURS = ['#E9A79D', '#4C6FB3', '#C8423B', '#E8C25A', '#F3EDE4', '#7FA37A', '#8C3C3C'];
function toupieJeu() {
  const t = $('.toupie--jeu');
  if (!t) return;
  const anneau = $('.toupie-anneau', t), logo = $('.toupie-logo', t);
  const zone = t.closest('.ouv') || document.body;
  const cv = $('.rubans', zone);
  const ctx = cv ? cv.getContext('2d') : null;
  let angle = 0, v = 70, saisi = false, aPrec = 0, tPrec = 0, c0 = null, bouge = 0, debut = 0;
  let cx = 0, cy = 0, rayon = 60, W = 0, H = 0, dpr = 1;
  const rubans = [];
  const mesurer = () => {
    if (!cv) return;
    const z = zone.getBoundingClientRect(), r = t.getBoundingClientRect();
    dpr = Math.min(1.5, window.devicePixelRatio || 1);
    W = z.width; H = z.height;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    cx = r.left - z.left + r.width / 2; cy = r.top - z.top + r.height / 2; rayon = r.width / 2;
  };
  mesurer();
  if (window.ResizeObserver) new ResizeObserver(mesurer).observe(zone);
  /* Saisie : l'angle suit le pointeur autour du centre ; la vitesse au lâcher devient l'élan. */
  /* Démonstration : la toupie se donne de l'élan toute seule, jusqu'au premier geste du visiteur. */
  let demo = true, horloge = 0, prochain = 2.9;
  const finDemo = () => { demo = false; };
  ['pointerdown', 'keydown'].forEach((ev) => t.addEventListener(ev, finDemo));
  t.addEventListener('pointerdown', (e) => {
    saisi = true; bouge = 0; debut = performance.now();
    try { t.setPointerCapture(e.pointerId); } catch (err) { /* rien */ }
    const r = t.getBoundingClientRect();
    c0 = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    aPrec = Math.atan2(e.clientY - c0.y, e.clientX - c0.x); tPrec = performance.now();
    t.classList.add('saisie');
  });
  t.addEventListener('pointermove', (e) => {
    if (!saisi) return;
    const a = Math.atan2(e.clientY - c0.y, e.clientX - c0.x);
    let d = (a - aPrec) * 180 / Math.PI;
    if (d > 180) d -= 360; if (d < -180) d += 360;
    const now = performance.now(), dt = Math.max(0.008, (now - tPrec) / 1000);
    angle += d; bouge += Math.abs(d);
    v = v * 0.4 + Math.max(-2600, Math.min(2600, d / dt)) * 0.6;
    aPrec = a; tPrec = now;
  });
  const lacher = () => {
    if (!saisi) return;
    saisi = false; t.classList.remove('saisie');
    /* Une simple tape lance la toupie. */
    if (bouge < 6 && performance.now() - debut < 400) v = (Math.sign(v) || 1) * Math.max(Math.abs(v), 900);
  };
  t.addEventListener('pointerup', lacher);
  t.addEventListener('pointercancel', lacher);
  t.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); v = (Math.sign(v) || 1) * (Math.abs(v) + 900); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); v += 400; }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); v -= 400; }
  });
  const emettre = (n, sens) => {
    for (let i = 0; i < n && rubans.length < 140; i++) {
      rubans.push({
        th: Math.random() * Math.PI * 2, r: rayon * (0.7 + Math.random() * 0.35),
        om: sens * (Math.min(9, Math.abs(v) * Math.PI / 180 * 0.55) + 0.6 + Math.random()),
        vr: 50 + Math.random() * 150 + Math.min(260, Math.abs(v) * 0.12), age: 0, vie: 1.1 + Math.random() * 1.3,
        len: 0.35 + Math.random() * 0.8, w: 2.5 + Math.random() * 7, col: COULEURS[(Math.random() * COULEURS.length) | 0],
      });
    }
  };
  let reserve = 0;
  boucle(zone, (dt) => {
    dt = Math.min(0.05, dt);
    horloge += dt;
    if (demo && horloge > prochain) { v = (Math.sign(v) || 1) * (Math.abs(v) + 620); prochain = horloge + 5.5; }
    if (!saisi) {
      const base = 26 + Math.min(260, Math.abs(vitesse) * 7);
      const cible = (Math.sign(v) || 1) * base;
      v += (cible - v) * (1 - Math.exp(-dt * 0.85));
      angle += v * dt;
    }
    anneau.style.transform = `rotate(${(angle % 360).toFixed(2)}deg)`;
    logo.style.transform = `rotate(${((angle * 0.5) % 360).toFixed(2)}deg)`;
    if (!ctx) return;
    reserve += dt * (2.6 + Math.max(0, Math.abs(v) - 60) * 0.05);
    const n = Math.floor(reserve); reserve -= n;
    if (n) emettre(n, Math.sign(v) || 1);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.lineCap = 'round';
    for (let i = rubans.length - 1; i >= 0; i--) {
      const p = rubans[i];
      p.age += dt;
      if (p.age > p.vie) { rubans.splice(i, 1); continue; }
      p.th += p.om * dt; p.om *= Math.exp(-dt * 0.6); p.r += p.vr * dt;
      const k = p.age / p.vie;
      ctx.globalAlpha = Math.pow(1 - k, 1.4) * 0.9;
      ctx.strokeStyle = p.col;
      ctx.lineWidth = p.w * (1 - k * 0.7);
      ctx.beginPath();
      const s = Math.sign(p.om) || 1;
      ctx.arc(cx, cy, p.r, p.th - s * p.len, p.th, s < 0);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  });
}

/* ---------- Portraits : la carte se retourne et montre la présentation. ---------- */
function portraits() {
  $$('.portrait-carte').forEach((c) => {
    const basculer = () => { const on = c.getAttribute('aria-pressed') !== 'true'; c.setAttribute('aria-pressed', String(on)); };
    c.addEventListener('click', basculer);
    c.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); basculer(); } });
  });
}

/* ---------- Curseur : un mot dans le disque au-dessus des objets à manipuler. ---------- */
function curseurMots() {
  const cur = () => $('.curseur');
  document.addEventListener('pointerover', (e) => {
    const c = cur(); if (!c || e.pointerType !== 'mouse') return;
    const el = e.target.closest && e.target.closest('[data-curseur-label]');
    if (el) { c.dataset.label = el.dataset.curseurLabel; c.classList.add('curseur-mot'); }
    else { c.classList.remove('curseur-mot'); delete c.dataset.label; }
  }, { passive: true });
}

/* ---------- Formulaire : le tampon de la compagnie se pose quand la demande est prête. ---------- */
function tampon() {
  const f = $('[data-formulaire]');
  if (!f) return;
  const msg = $('[data-message-envoi]', f), t = $('.tampon', f);
  if (!msg || !t) return;
  new MutationObserver(() => {
    if (msg.hidden || t.classList.contains('pose')) return;
    t.hidden = false;
    if (gsap) gsap.fromTo(t, { scale: 2.2, rotation: -40, opacity: 0 }, { scale: 1, rotation: -8, opacity: 1, duration: 0.55, ease: 'back.out(2.2)' });
    t.classList.add('pose');
  }).observe(msg, { attributes: true, attributeFilter: ['hidden'] });
}


/* ---------- Créations : le rail des disques n'apparaît que pendant les chapitres. ---------- */
function rail() {
  const r = $('.rail');
  if (!r || !gsap || !ST()) return;
  const chapitres = $$('.chapitre');
  if (!chapitres.length) return;
  ST().create({ trigger: chapitres[0], endTrigger: chapitres[chapitres.length - 1], start: 'top 60%', end: 'bottom 40%',
    onToggle: (self) => r.classList.toggle('rail--visible', self.isActive) });
}

/* ---------- Roue des créations : un cran de 72° par création, au défilement. ---------- */
function roue() {
  const section = $('.roue');
  if (!section || !gsap || !ST()) return;
  const anneau = $('.roue-anneau', section);
  const fiches = $$('.roue-fiche', section), images = $$('.roue-image', section), pastilles = $$('.roue-pastille', section);
  const n = fiches.length;
  let actif = 0;
  const activer = (i) => {
    if (i === actif) return;
    actif = i;
    [fiches, images, pastilles].forEach((l) => l.forEach((el, j) => el.classList.toggle('est-active', j === i)));
  };
  pastilles[0] && pastilles[0].classList.add('est-active');
  let declencheur = null;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 761px)', () => {
    declencheur = ST().create({
      trigger: section, start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true,
      onUpdate(self) {
        const p = Math.max(0, (self.progress - 0.03) / 0.94);
        const f = Math.min(n - 1, p * (n - 1) * 1.08);
        anneau.style.setProperty('--rot', `${(-f * 72).toFixed(2)}deg`);
        activer(Math.min(n - 1, Math.round(f)));
      },
    });
    return () => { declencheur = null; };
  });
  mm.add('(max-width: 760px)', () => {
    /* Téléphone : chaque création a son disque, qui roule en entrant dans l'écran. */
    $$('.roue-fiche-rond', section).forEach((r, i) => gsap.fromTo(r, { rotation: i % 2 ? 120 : -120 }, { rotation: 0, ease: 'none',
      scrollTrigger: { trigger: r, start: 'top bottom', end: 'top 45%', scrub: 0.5 } }));
  });
  /* Sur ordinateur, la roue s'attrape : la tourner fait défiler la page jusqu'à la création suivante. */
  const disque = $('.roue-disque', section);
  let prise = null;
  const f2y = (f) => { const d = declencheur; return Math.round(d.start + (0.03 + (f / ((n - 1) * 1.08)) * 0.94) * (d.end - d.start)); };
  disque.addEventListener('pointerdown', (e) => {
    if (!declencheur || e.pointerType === 'touch') return;
    const r = disque.getBoundingClientRect();
    const c = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    const p = Math.max(0, (declencheur.progress - 0.03) / 0.94);
    prise = { c, a: Math.atan2(e.clientY - c.y, e.clientX - c.x), f: Math.min(n - 1, p * (n - 1) * 1.08), d: 0, id: e.pointerId };
    disque.classList.add('saisie');
  });
  window.addEventListener('pointermove', (e) => {
    if (!prise || e.pointerId !== prise.id) return;
    const a = Math.atan2(e.clientY - prise.c.y, e.clientX - prise.c.x);
    let d = (a - prise.a) * 180 / Math.PI; if (d > 180) d -= 360; if (d < -180) d += 360;
    prise.a = a; prise.d += d;
    if (Math.abs(prise.d) < 4) return;
    prise.glisse = true;
    prise.f = Math.max(0, Math.min(n - 1, prise.f - d / 72));
    aller(f2y(prise.f), { instant: true });
  });
  const relacher = () => {
    if (!prise) return;
    const g = prise.glisse, f = prise.f;
    prise = null; disque.classList.remove('saisie');
    if (g) { aller(f2y(Math.round(f))); disque.dataset.glisse = '1'; setTimeout(() => { delete disque.dataset.glisse; }, 60); }
  };
  window.addEventListener('pointerup', relacher);
  window.addEventListener('pointercancel', relacher);
  pastilles.forEach((b, i) => b.addEventListener('click', () => {
    if (disque.dataset.glisse) return;
    if (declencheur) {
      aller(f2y(i) + 2);
    } else activer(i);
  }));
}

/* ---------- Appel final : le disque grandit et tourne. ---------- */
function disqueFinal() {
  if (!gsap || !ST()) return;
  $$('.appel-disque').forEach((d) => {
    gsap.fromTo(d, { rotation: -120, scale: 0.55 }, { rotation: 60, scale: 1.1, ease: 'none',
      scrollTrigger: { trigger: d.closest('.appel'), start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
  });
}

/* ---------- Petits effets d'ouverture liés au défilement. ---------- */
function effetsOuvertures() {
  if (!gsap || !ST()) return;
  const bandeau = $$('.bandeau-media');
  if (bandeau.length) gsap.fromTo(bandeau, { rotation: 0 }, { rotation: (i) => (i % 2 ? 10 : -10), ease: 'none',
    scrollTrigger: { trigger: '.bandeau-ronds', start: 'top 70%', end: 'bottom top', scrub: 0.5 } });
  const disque = $('.prochaine-disque');
  if (disque) gsap.fromTo(disque, { rotation: 0 }, { rotation: -24, ease: 'none', scrollTrigger: { trigger: '.ouv--agenda', start: 'top top', end: 'bottom top', scrub: 0.5 } });
  const portrait = $('.contact-disque');
  if (portrait) gsap.fromTo(portrait, { scale: 1 }, { scale: 0.9, ease: 'none', scrollTrigger: { trigger: '.ouv--contact', start: 'top top', end: 'bottom top', scrub: 0.5 } });
  $$('.soutenir-logo').forEach((l) => gsap.fromTo(l, { rotation: -90 }, { rotation: 90, ease: 'none', scrollTrigger: { trigger: l, start: 'top bottom', end: 'bottom top', scrub: 0.5 } }));
}

/* ---------- Carte de la tournée : les villes apparaissent saison après saison. ---------- */
function carte() {
  const fig = $('.carte-figure');
  if (!fig) return;
  const annee = $('[data-carte-annee]');
  const elts = $$('[data-an]', fig);
  const montrer = (a) => { elts.forEach((e) => e.classList.toggle('on', +e.dataset.an <= a)); if (annee) annee.textContent = a; };
  if (!gsap || !ST()) { fig.classList.add('fx-fini'); return; }
  montrer(2021);
  ST().create({ trigger: fig, start: 'top 75%', end: 'bottom 45%', scrub: true,
    onUpdate: (self) => montrer(2021 + Math.round(self.progress * 6)) });
}

/* ---------- Teasers : la vidéo YouTube ne se charge qu'au clic. ---------- */
function teasers() {
  $$('.teaser[data-youtube]').forEach((t) => {
    const b = $('.teaser-bouton', t);
    if (!b) return;
    b.addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.src = `https://www.youtube-nocookie.com/embed/${t.dataset.youtube}?autoplay=1&rel=0`;
      f.title = `Teaser de ${t.dataset.titre}`;
      f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.allowFullscreen = true;
      t.classList.add('lecture');
      t.appendChild(f);
      b.remove();
      f.focus();
    });
  });
}

/* ---------- Dates : recalculées au jour réel du visiteur (la page a pu être générée la veille). ---------- */
const lireDate = (s, fin) => { const [d, h] = s.split('T'); const [a, m, j] = d.split('-').map(Number); const [hh, mm] = (h || (fin ? '23:59' : '00:00')).split(':').map(Number); return new Date(a, m - 1, j, hh, mm); };
function datesReelles() {
  const maintenant = new Date();
  const passee = (li) => lireDate(li.dataset.fin || li.dataset.debut, true) < maintenant;
  $$('.dates-liste').forEach((ol) => {
    const max = +(ol.dataset.datesMax || 99);
    let k = 0;
    $$('.date', ol).forEach((li) => { const cache = passee(li) || k >= max; li.hidden = cache; if (!cache) k++; });
    const vide = ol.parentElement.querySelector('[data-sans-date]');
    if (vide) vide.hidden = k > 0;
  });
  const info = $('[data-prochaine-texte]');
  const premiere = $$('.dates-liste .date').find((li) => !li.hidden);
  if (info && premiere) {
    const j = $('.date-jour', premiere), t = $('.date-titre', premiere), l = $('.date-lieu', premiere);
    const ville = l ? l.textContent.split(',').pop().replace(/\s*\(.*$/, '').split('·')[0].trim() : '';
    if (j && t) info.textContent = `${j.firstElementChild.textContent} ${j.lastChild.textContent.trim()} · ${t.textContent.trim()}${ville ? ` · ${ville}` : ''}`;
  }
}

/* ---------- Agenda : module de la bibliothèque, filtres par création ; la prochaine date du disque suit le jour réel. ---------- */
function agenda() {
  const racine = $('.agd[data-module="agenda-des-dates"]');
  if (!racine) return;
  initAgenda(racine, { fuseau: 'Europe/Paris', parMois: true, textes: { tous: 'Toutes', passees: (n) => `Saisons passées (${n} dates)`, prochaine: (t, q) => `Prochaine date\u00a0: ${t}, ${q}` } })
    .then(() => window.dispatchEvent(new Event('resize')))
    .catch((e) => console.error('[agenda]', e));
  const bloc = $('[data-prochaine-bloc]');
  if (!bloc) return;
  const maintenant = new Date();
  const li = $$('.agd__date', racine).filter((x) => x.dataset.debut && lireDate(x.dataset.fin || x.dataset.debut, true) >= maintenant)
    .sort((a, b) => lireDate(a.dataset.debut) - lireDate(b.dataset.debut))[0];
  if (!li) return;
  const d = lireDate(li.dataset.debut);
  const mois = new Intl.DateTimeFormat('fr-FR', { month: 'short' }).format(d);
  const jour = $('[data-p-jour]', bloc);
  if (jour && +jour.textContent.split('-')[0] !== d.getDate()) {
    jour.textContent = d.getDate();
    $('[data-p-mois]', bloc).textContent = mois;
    $('[data-p-titre]', bloc).textContent = $('.agd__titre', li).textContent;
    $('[data-p-lieu]', bloc).textContent = li.dataset.lieu;
  }
  const jours = Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()) - new Date(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate())) / 864e5);
  const compte = $('[data-p-compte]', bloc);
  if (compte) compte.textContent = jours <= 0 ? 'aujourd’hui' : jours === 1 ? 'demain' : `dans ${jours} jours`;
}

demarrer({
  preparer() {
    suivreVitesse();
    datesReelles();
    toupies();
    toupieJeu();
    portraits();
    curseurMots();
    tampon();
    rail();
    roue();
    disqueFinal();
    effetsOuvertures();
    carte();
    teasers();
    agenda();
  },
  /* Intro (moins de 3 s) : le disque tourne, glisse jusqu'à la toupie de la page et s'ouvre ; le titre tournoie. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-objet', { rotation: -320, scale: 0.5 }, { rotation: 0, scale: 1, duration: 0.95, ease: 'power3.out' }, 0)
      .fromTo('.ouverture-objet .toupie-anneau', { rotation: -60, opacity: 0 }, { rotation: 90, opacity: 1, duration: 1.4, ease: 'power2.out' }, 0.1);
    versObjet(tl, { a: 1.0, duree: 0.45, ouverture: 0.75 });
    animerOuverture(tl, 1.35);
    return tl;
  },
  etatFinal() {
    rendreTitre();
    document.documentElement.classList.add('ouv-pret');
    if (!gsap) return;
    document.documentElement.classList.add('ouv-pret');
    gsap.set('[data-ouv], .bandeau-ronds li', { clearProps: 'transform,opacity' });
    $$('.carte-figure').forEach((f) => { f.classList.add('fx-fini'); $$('[data-an]', f).forEach((e) => e.classList.add('on')); });
  },
  /* Arrivée par un lien interne : le titre tournoie pendant que le voile s'ouvre. */
  arrivee() {
    if (!gsap) return;
    animerOuverture(gsap.timeline({ delay: 0.1 }), 0);
  },
});
