/* Composants communs aux pages de la Virevoltée : toupie (logo et texte qui tourne), dates, teasers, appel final.
   Les dates « à venir » écrites ici le sont au jour de la génération ; assets/js/site.js les recalcule au jour réel. */
import { html, brut } from '../../outils/gabarit.mjs';

let n = 0;
/* Toupie : le disque du logo entouré d'un texte en anneau. iris : objet d'ouverture de la page (un seul par page). */
export function toupie(c, { iris = false, classe = '', jeu = false } = {}) {
  const id = `anneau-${++n}`;
  const attrs = jeu ? ` role="button" tabindex="0" aria-label="${c.s('commun.toupieJeu')}" data-grille="manipuler" data-curseur-label="${c.s('commun.toupieCurseur')}"` : ' aria-hidden="true"';
  return html`<div class="toupie ${classe}${jeu ? ' toupie--jeu' : ''}"${iris ? brut(' data-iris-centre="disque"') : ''} data-effet="toupie"${brut(attrs)}>
  <svg class="toupie-anneau" viewBox="0 0 200 200" data-audit-ignorer><defs><path id="${id}" d="M100 100 m-82 0 a82 82 0 1 1 164 0 a82 82 0 1 1 -164 0"/></defs><text><textPath href="#${id}" textLength="508">${c.s('commun.toupie')}</textPath></text></svg>
  <img class="toupie-logo" src="/assets/images/logo-160.png" alt="" width="160" height="160">
</div>`;
}

const jourLocal = (s) => { const [d, h] = s.split('T'); const [a, m, j] = d.split('-').map(Number); const [hh, mm] = (h || '23:59').split(':').map(Number); return new Date(a, m - 1, j, hh, mm); };
export const finDate = (d) => jourLocal(d.fin ? (d.fin.includes('T') ? d.fin : `${d.fin}T23:59`) : (d.debut.includes('T') ? d.debut : `${d.debut}T23:59`));
export function aVenir(c, filtre = () => true) {
  const maintenant = new Date();
  return c.donnees.agenda.filter((d) => finDate(d) >= maintenant && filtre(d)).sort((a, b) => jourLocal(a.debut) - jourLocal(b.debut));
}
const MOIS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
const MOIS_LONGS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
export function partiesDate(d) {
  const a = jourLocal(d.debut), b = d.fin ? jourLocal(d.fin) : null;
  const jour = b && b.getDate() !== a.getDate() ? `${a.getDate()}-${b.getDate()}` : `${a.getDate()}`;
  const heure = d.debut.includes('T') ? d.debut.split('T')[1].replace(':', ' h ').replace(/ 00$/, '').replace(/^0/, '') : '';
  return { jour, mois: MOIS[a.getMonth()], moisLong: MOIS_LONGS[a.getMonth()], annee: a.getFullYear(), heure: heure.replace(/ h (\d\d)$/, ' h $1') };
}
export const ville = (d) => `${d.ville}${/^\d/.test(d.dept) ? ` (${d.dept})` : d.dept ? `, ${d.dept}` : ''}`;
export const creation = (c, cle) => c.donnees.creations.find((x) => x.cle === cle);

/* Une date en ligne : pastille ronde de la création, jour, titre, lieu. */
export function ligneDate(c, d) {
  const p = partiesDate(d), cr = creation(c, d.creation);
  const quand = `${p.jour} ${p.moisLong} ${p.annee}${p.heure ? `, ${p.heure}` : ''}${d.note && /^\d/.test(d.note) ? `, ${d.note}` : ''}`;
  const note = d.note && !/^\d/.test(d.note) ? d.note : '';
  return html`<li class="date" data-debut="${d.debut}" data-fin="${d.fin || ''}">
  ${cr ? c.media({ nom: cr.rond, alt: '', classe: 'date-rond', sizes: '96px', ratio: '1 / 1' }) : html`<span class="date-rond date-rond--vide" data-visuel aria-hidden="true"></span>`}
  <p class="date-jour" aria-hidden="true"><span>${p.jour}</span>${p.mois}</p>
  <div class="date-corps">
    <h3 class="date-titre">${cr ? c.lien('creations', { ancre: cr.cle, texte: d.titre }) : d.titre}</h3>
    <p class="date-quand"><time datetime="${d.debut}">${quand}</time> · ${d.type}</p>
    <p class="date-lieu">${d.lieu ? `${d.lieu}, ` : ''}${ville(d)}${note ? ` · ${note}` : ''}</p>
  </div>
</li>`;
}

/* Teaser : affiche (photo de la création) et bouton ; la vidéo YouTube ne se charge qu'au clic. */
export function teaser(c, cr, nom, classe = '') {
  return html`<div class="teaser ${classe}" data-youtube="${cr.teaser}" data-titre="${cr.titre}">
  ${c.media({ nom, alt: '', classe: 'teaser-media', sizes: '(max-width: 760px) 100vw, 50vw', ratio: '16 / 9' })}
  <button type="button" class="teaser-bouton" data-curseur-label="${c.s('commun.voir')}"><span class="teaser-play" aria-hidden="true"></span><span class="teaser-libelle">${c.t('commun.teaser', { titre: cr.titre })}</span></button>
  <p class="teaser-nom" aria-hidden="true">${cr.titre} <span>${cr.anneeCourte}</span></p>
</div>`;
}

/* Appel final : le disque du logo grandit et tourne au défilement (effet « disque-final »). */
export function appel(c, { titre, texte, params = 'sujet=programmation', bouton } = {}) {
  return html`<section class="appel plateau" id="appel" aria-labelledby="appel-titre">
  <div class="appel-disque" data-effet="disque-final" data-visuel aria-hidden="true"><img src="/assets/images/logo-160.png" alt="" width="160" height="160" loading="lazy"></div>
  <div class="conteneur appel-texte">
    <h2 id="appel-titre" class="titre-section" data-anime="lignes">${titre}</h2>
    <p data-anime>${texte}</p>
    <p class="appel-actions" data-anime>${c.lien('contact', { ancre: 'demande', params, classe: 'bouton bouton--clair', texte: bouton || c.t('commun.ecrire'), attrs: 'data-survol="magnetique"' })}
      <a class="lien-fleche" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a></p>
  </div>
</section>`;
}
