/* Page 404 : le plateau vide sous les projecteurs, « Faux pas ». */
import { html } from '../../outils/gabarit.mjs';
import { toupie } from '../gabarits/composants.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => {
  const im = c.donnees.images['page-404'];
  return html`
<section class="ouv ouv--404 plateau" id="debut" aria-labelledby="titre-404">
  ${c.media({ nom: 'page-404', alt: im.alt, cadrage: im.cadrage, cadrageMobile: im.mobile && im.mobile.cadrage, priorite: true, classe: 'ouv-fond', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
  <div class="conteneur ouv-texte">
    <p class="surtitre" data-ouv>${c.t('introuvable.sur')}</p>
    <h1 class="titre-geant titre-geant--moyen" id="titre-404" data-anime="gsap"><span class="l">${c.t('introuvable.titre')}</span></h1>
    <p class="ouv-intro" data-ouv>${c.t('introuvable.texte')}</p>
    <p class="ouv-actions" data-ouv>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}
      ${c.lien('agenda', { classe: 'lien-fleche lien-fleche--clair', texte: c.t('introuvable.agenda'), attrs: 'data-info-cle' })}</p>
  </div>
  ${toupie(c, { iris: true, classe: 'toupie--ouverture' })}
</section>
`;
};
