/* Créations : grand titre puis bandeau des cinq disques ; un chapitre par création, fond clair pour la rue,
   fond plateau pour la salle ; fiche, équipe, teaser, photos, repères, dates, bouton « Programmer ». */
import { html } from '../../outils/gabarit.mjs';
import { toupie, aVenir, ligneDate, teaser, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'creations', fichier: 'creations', imagePartage: 'rond-inshift' };

export default (c) => {
  const cr = c.donnees.creations;
  const img = (n) => c.donnees.images[n] || {};
  return html`
<section class="ouv ouv--creations" id="debut" aria-labelledby="titre-creations">
  <div class="conteneur ouv-creations-haut">
    <div class="ouv-titre-boite">
      <p class="surtitre" data-ouv>${c.t('creations.ouverture.sur')}</p>
      <h1 class="titre-geant titre-geant--encre" id="titre-creations" data-anime="gsap"><span class="l">${c.t('creations.ouverture.l1')}</span> <span class="l">${c.t('creations.ouverture.l2')}</span> <span class="l l--accent">${c.t('creations.ouverture.l3')}</span></h1>
    </div>
    <div class="ouv-creations-cote">
      ${toupie(c, { iris: true, classe: 'toupie--page' })}
      <p class="ouv-intro" data-ouv>${c.t('creations.ouverture.texte')}</p>
      <p class="ouv-actions" data-ouv>${c.lien('contact', { ancre: 'demande', params: 'sujet=programmation', classe: 'bouton', texte: c.t('commun.programmer'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="ouv-info ouv-info--encre" data-info-cle data-ouv>${c.t('creations.ouverture.info')}</p>
    </div>
  </div>
  <nav class="bandeau-ronds" aria-label="${c.s('creations.sommaire')}">
    <ol data-effet="bandeau" data-ouv-cascade>
      ${cr.map((x) => html`<li><a href="#${x.cle}" class="bandeau-rond" data-sans-transition>${c.media({ nom: x.rond, alt: '', sizes: '(max-width: 760px) 40vw, 18vw', classe: 'bandeau-media' })}<span class="bandeau-nom">${x.titre}</span><span class="bandeau-annee">${x.anneeCourte}</span></a></li>`)}
    </ol>
  </nav>
</section>

${cr.map((x, i) => {
  const dates = aVenir(c, (d) => d.creation === x.cle).slice(0, 3);
  return html`<article class="chapitre chapitre--${x.fond}${i % 2 ? ' chapitre--inverse' : ''}${x.fond === 'plateau' ? ' plateau' : ''}" id="${x.cle}" aria-labelledby="titre-${x.cle}">
  <div class="conteneur chapitre-grille">
    <header class="chapitre-tete">
      <p class="chapitre-num" data-anime>0${i + 1} / 05 · ${x.annee}</p>
      <h2 class="chapitre-titre" id="titre-${x.cle}" data-anime="lettres">${x.titre}</h2>
      <p class="chapitre-sous" data-anime>${x.sousTitre}</p>
      <p class="chapitre-accroche" data-anime="mots">${`« ${x.accroche} »`}</p>
    </header>
    ${c.media({ nom: x.images[0], alt: img(x.images[0]).alt, cadrage: img(x.images[0]).cadrage, classe: 'chapitre-media', sizes: '(max-width: 760px) 100vw, 55vw', ratio: '3 / 2', attrs: 'data-fx="parallaxe" data-fx-force="7"' })}
    <div class="chapitre-texte">
      <dl class="fiche" data-anime="cascade">
        <div><dt>${c.t('creations.format')}</dt><dd>${x.format}</dd></div>
        <div><dt>${c.t('creations.duree')}</dt><dd>${x.duree}</dd></div>
        <div><dt>${c.t('creations.public')}</dt><dd>${x.public}</dd></div>
      </dl>
      <p class="chapitre-propos" data-anime>${x.propos}</p>
      <h3 class="mini-titre" data-anime>${c.t('creations.equipe')}</h3>
      <ul class="equipe-mini" data-anime="cascade">${x.equipe.map((p) => html`<li><strong>${p.nom}</strong>, ${p.role}</li>`)}</ul>
      <p class="chapitre-actions" data-anime>${c.lien('contact', { ancre: 'demande', params: `sujet=programmation&creation=${x.cle}`, classe: 'bouton', texte: c.t('creations.programmer', { titre: x.titre }) })}</p>
    </div>
    <div class="chapitre-galerie">
      ${x.images.slice(1).map((n) => c.media({ nom: n, alt: img(n).alt, cadrage: img(n).cadrage, ratio: '4 / 5', sizes: '(max-width: 760px) 50vw, 22vw', classe: 'chapitre-photo', attrs: 'data-fx="vitesse" data-fx-force="2"' }))}
      <p class="credit">${x.credits}</p>
    </div>
    <div class="chapitre-plus">
      ${x.teaser ? html`<div data-anime>${teaser(c, x, x.images[0] === 'nocturnes-1' ? 'teaser-nocturnes' : x.cle === 'echo' ? 'teaser-echo' : x.cle === 'doline' ? 'teaser-doline' : 'teaser-souffle', 'teaser--chapitre')}</div>` : ''}
      <div class="chapitre-reperes">
        <h3 class="mini-titre" data-anime>${c.t('creations.reperes')}</h3>
        <ul class="liste-filet" data-anime="cascade">${x.reperes.map((r) => html`<li>${r}</li>`)}</ul>
        <h3 class="mini-titre" data-anime>${c.t('creations.soutiens')}</h3>
        <ul class="liste-filet" data-anime="cascade">${x.soutiens.map((r) => html`<li>${r}</li>`)}</ul>
      </div>
      <div class="chapitre-dates">
        <h3 class="mini-titre" data-anime>${c.t('creations.dates')}</h3>
        ${dates.length ? html`<ol class="dates-liste dates-liste--compacte" data-anime="cascade">${dates.map((d) => ligneDate(c, d))}</ol>` : ''}
        <p class="sans-date"${dates.length ? ' hidden' : ''} data-sans-date data-anime>${c.t('creations.sansDate')}</p>
      </div>
    </div>
  </div>
</article>`;
})}

${appel(c, { titre: c.t('creations.appelTitre'), texte: c.t('creations.appelTexte') })}
`;
};
