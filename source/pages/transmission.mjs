/* Transmission : ouverture scindée (photo des bras à gauche, texte à droite, toupie) ; éducation artistique
   en frise par saison ; coaching scénique ; Dada Collectif en fiche pratique ; chorégraphie pour d'autres artistes. */
import { html } from '../../outils/gabarit.mjs';
import { toupie, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'transmission', fichier: 'transmission', imagePartage: 'transmission-ouverture' };

export default (c) => {
  const img = (n) => c.donnees.images[n] || {};
  const T = c.donnees.transmission;
  return html`
<section class="ouv ouv--transmission" id="debut" aria-labelledby="titre-transmission">
  <div class="ouv-trans-grille">
    ${c.media({ nom: 'transmission-ouverture', alt: img('transmission-ouverture').alt, cadrage: img('transmission-ouverture').cadrage, priorite: true, classe: 'ouv-trans-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
    <div class="ouv-trans-texte">
      ${toupie(c, { iris: true, classe: 'toupie--page toupie--trans' })}
      <p class="surtitre" data-ouv>${c.t('transmission.ouverture.sur')}</p>
      <h1 class="titre-geant titre-geant--encre titre-geant--moyen" id="titre-transmission" data-anime="gsap" data-grille="typo"><span class="l">${c.t('transmission.ouverture.l1')}</span> <span class="l">${c.t('transmission.ouverture.l2')}</span> <span class="l l--accent">${c.t('transmission.ouverture.l3')}</span></h1>
      <p class="ouv-intro masque-ecran-tres-bas" data-ouv>${c.t('transmission.ouverture.texte')}</p>
      <p class="ouv-actions" data-ouv>${c.lien('contact', { ancre: 'demande', params: 'sujet=mediation', classe: 'bouton', texte: c.t('transmission.ouverture.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="ouv-info ouv-info--encre" data-info-cle data-ouv>${c.t('transmission.ouverture.info')}</p>
    </div>
  </div>
  <p class="credit credit--trans">${c.t('commun.credit', { nom: c.s('transmission.ouverture.credit') })}</p>
</section>

<section class="eac" id="eac" aria-labelledby="eac-titre">
  <div class="conteneur eac-grille">
    <div class="eac-tete">
      <p class="surtitre" data-anime>${c.t('transmission.eac.sur')}</p>
      <h2 id="eac-titre" class="titre-section" data-anime="lignes">${c.t('transmission.eac.titre')}</h2>
      <p data-anime>${c.t('transmission.eac.texte')}</p>
      <div class="eac-photos">
        ${c.media({ nom: 'transmission-eac', alt: img('transmission-eac').alt, ratio: '3 / 2', sizes: '(max-width: 760px) 50vw, 18vw', classe: 'eac-photo', attrs: 'data-fx="vitesse" data-fx-force="2"' })}
        ${c.media({ nom: 'transmission-marceau', alt: img('transmission-marceau').alt, ratio: '3 / 2', sizes: '(max-width: 760px) 50vw, 18vw', classe: 'eac-photo', attrs: 'data-fx="vitesse" data-fx-force="2"' })}
      </div>
      <p data-anime>${c.lien('contact', { ancre: 'demande', params: 'sujet=mediation', classe: 'lien-fleche', texte: c.t('transmission.eac.action') })}</p>
    </div>
    <div class="frise">
      <svg class="frise-trait" viewBox="0 0 4 100" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M2 0 V100" fill="none" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/></svg>
      <ol class="frise-liste">
      ${T.eac.map((s) => html`<li class="frise-saison">
        <p class="frise-annee" data-anime>${s.saison}</p>
        <ul data-anime="cascade">${s.projets.map((p) => html`<li>${p}</li>`)}</ul>
      </li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="coaching plateau" id="coaching" aria-labelledby="coaching-titre">
  <div class="conteneur coaching-grille">
    ${c.media({ nom: 'grok/transmission-coaching', alt: img('grok/transmission-coaching').alt, ratio: '3 / 2', sizes: '(max-width: 760px) 100vw, 50vw', classe: 'coaching-media', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre" data-anime>${c.t('transmission.coaching.sur')}</p>
      <h2 id="coaching-titre" class="titre-section" data-anime="lignes">${c.t('transmission.coaching.titre')}</h2>
      <p data-anime>${c.t('transmission.coaching.texte')}</p>
      <p class="note" data-anime>${c.t('transmission.coaching.formation')}</p>
      <p class="coaching-ref" data-anime>${c.t('transmission.coaching.reference')}</p>
      <p data-anime>${c.lien('contact', { ancre: 'demande', params: 'sujet=coaching', classe: 'bouton bouton--clair', texte: c.t('transmission.coaching.action') })}</p>
    </div>
  </div>
</section>

<section class="dada" id="dada" aria-labelledby="dada-titre">
  <div class="conteneur dada-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('transmission.dada.sur')}</p>
      <h2 id="dada-titre" class="titre-section" data-anime="lignes">${c.t('transmission.dada.titre')}</h2>
      <p data-anime>${c.t('transmission.dada.texte')}</p>
      <dl class="fiche fiche--dada" data-anime="cascade">
        <div><dt>${c.t('transmission.dada.quand')}</dt><dd>${c.t('transmission.dada.quandValeur')}</dd></div>
        <div><dt>${c.t('transmission.dada.ou')}</dt><dd>${c.t('transmission.dada.ouValeur')}</dd></div>
        <div><dt>${c.t('transmission.dada.qui')}</dt><dd>${c.t('transmission.dada.quiValeur')}</dd></div>
        <div><dt>${c.t('transmission.dada.prix')}</dt><dd><strong>${c.t('transmission.dada.prixValeur')}</strong></dd></div>
      </dl>
      <p class="note" data-anime>${c.t('transmission.dada.membres')}</p>
      <p data-anime>${c.lien('contact', { ancre: 'demande', params: 'sujet=dada', classe: 'bouton', texte: c.t('transmission.dada.action') })}</p>
    </div>
    <div class="dada-visuels">
      ${c.media({ nom: 'grok/transmission-dada', alt: img('grok/transmission-dada').alt, ratio: '3 / 2', sizes: '(max-width: 760px) 100vw, 50vw', classe: 'dada-media', attrs: 'data-fx="zoom"' })}
      ${c.media({ nom: 'dada-logo', alt: img('dada-logo').alt || 'Logo du Dada Collectif', classe: 'dada-logo', sizes: '160px' })}
    </div>
  </div>
</section>

<section class="regard" id="regard" aria-labelledby="regard-titre">
  <div class="conteneur regard-grille">
    <div class="regard-tete">
      <p class="surtitre" data-anime>${c.t('transmission.regard.sur')}</p>
      <h2 id="regard-titre" class="titre-section" data-anime="lignes">${c.t('transmission.regard.titre')}</h2>
      <p data-anime>${c.t('transmission.regard.texte')}</p>
      <dl class="annees" data-anime="cascade">${T.regard.map((a) => html`<div><dt>${a.annee}</dt><dd><ul>${a.items.map((x) => html`<li>${x}</li>`)}</ul></dd></div>`)}</dl>
    </div>
    <div class="regard-photos">
      ${c.media({ nom: 'choregraphie-beatus', alt: img('choregraphie-beatus').alt, ratio: '3 / 2', sizes: '(max-width: 760px) 100vw, 45vw', classe: 'regard-photo', attrs: 'data-fx="parallaxe"' })}
      ${c.media({ nom: 'choregraphie-foret', alt: img('choregraphie-foret').alt, ratio: '3 / 2', sizes: '(max-width: 760px) 100vw, 35vw', classe: 'regard-photo regard-photo--2', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
    </div>
  </div>
</section>

${appel(c, { titre: c.t('transmission.appelTitre'), texte: c.t('transmission.appelTexte'), params: 'sujet=mediation' })}
`;
};
