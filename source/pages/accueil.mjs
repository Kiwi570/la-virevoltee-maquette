/* Accueil : ouverture plein cadre et toupie, démarche, roue des créations, prochaines dates, teasers,
   transmission, équipe, lieux, appel final. Chaque section a un effet visible au défilement. */
import { html, brut } from '../../outils/gabarit.mjs';
import { toupie, aVenir, ligneDate, partiesDate, ville, creation, teaser, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'accueil-ouverture' };

export default (c) => {
  const cr = c.donnees.creations;
  const prochaines = aVenir(c);
  const p1 = prochaines[0];
  const villes = new Set(c.donnees.agenda.map((d) => d.ville)).size;
  const parCle = Object.fromEntries(cr.map((x) => [x.cle, x]));
  const routes = [...new Set(c.donnees.agenda.map((d) => d.ville))];
  return html`
<section class="ouv ouv--accueil" id="debut" aria-labelledby="titre-accueil">
  ${c.media({ nom: 'accueil-ouverture', alt: c.donnees.images['accueil-ouverture'].alt, cadrage: '55% 45%', cadrageMobile: c.donnees.images['accueil-ouverture'].mobile.cadrage, priorite: true, classe: 'ouv-fond', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  <div class="conteneur ouv-texte">
    <p class="surtitre ouv-sur" data-ouv>${c.t('accueil.hero.sur')}</p>
    <h1 class="titre-geant" id="titre-accueil" data-anime="gsap"><span class="l">${c.t('accueil.hero.l1')}</span> <span class="l l--accent">${c.t('accueil.hero.l2')}</span> <span class="l">${c.t('accueil.hero.l3')}</span></h1>
    <p class="ouv-intro masque-ecran-tres-bas" data-ouv>${c.t('accueil.hero.texte')}</p>
    <p class="ouv-actions" data-ouv>${c.lien('contact', { ancre: 'demande', params: 'sujet=programmation', classe: 'bouton', texte: c.t('commun.programmer'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('creations', { classe: 'lien-fleche lien-fleche--clair masque-ecran-tres-bas', texte: c.t('accueil.hero.secondaire') })}</p>
    ${p1 ? html`<p class="ouv-info" data-info-cle data-prochaine data-ouv><span class="ouv-info-label">${c.t('commun.prochaine')}</span> <span data-prochaine-texte>${partiesDate(p1).jour} ${partiesDate(p1).mois} · ${p1.titre} · ${p1.ville}</span></p>` : ''}
  </div>
  ${toupie(c, { iris: true, classe: 'toupie--ouverture' })}
  <p class="credit credit--ouv">${c.t('commun.credit', { nom: c.s('accueil.hero.credit') })}</p>
</section>

<section class="demarche" id="compagnie" aria-labelledby="demarche-titre">
  <div class="conteneur demarche-grille">
    <div class="demarche-texte">
      <p class="surtitre" data-anime>${c.t('accueil.demarche.sur')}</p>
      <h2 id="demarche-titre" class="titre-section" data-anime="lignes">${c.t('accueil.demarche.titre')}</h2>
      <p data-anime>${c.t('accueil.demarche.texte1')}</p>
      <p data-anime>${c.t('accueil.demarche.texte2')}</p>
    </div>
    ${c.media({ nom: 'accueil-demarche', alt: c.donnees.images['accueil-demarche'].alt, cadrage: c.donnees.images['accueil-demarche'].cadrage, classe: 'demarche-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"' })}
    <blockquote class="citation">
      <p data-anime="mots">${c.t('accueil.demarche.citation1')} <em>${c.t('accueil.demarche.citation2')}</em></p>
      <footer data-anime>${c.t('accueil.demarche.auteur')}</footer>
    </blockquote>
  </div>
</section>

<section class="roue" id="creations" data-scene aria-labelledby="roue-titre">
  <div class="roue-collant" data-collant>
    <div class="conteneur roue-tete">
      <p class="surtitre" data-anime>${c.t('accueil.roue.sur')}</p>
      <h2 id="roue-titre" class="titre-section" data-anime="lignes">${c.t('accueil.roue.titre')}</h2>
      <p class="roue-indice masque-ecran-bas" data-anime>${c.t('accueil.roue.indice')}</p>
    </div>
    <div class="roue-scene conteneur">
      <div class="roue-disque" data-effet="roue" data-visuel>
        <div class="roue-anneau">
          ${cr.map((x, i) => html`<button type="button" class="roue-pastille" style="--i:${i}" data-index="${i}" aria-label="${x.titre}">${c.media({ nom: x.rond, alt: '', sizes: '120px', classe: 'roue-pastille-media' })}</button>`)}
        </div>
        <div class="roue-centre">
          ${cr.map((x, i) => c.media({ nom: x.rond, alt: x.titre, sizes: '(max-width: 760px) 60vw, 34vw', classe: `roue-image${i === 0 ? ' est-active' : ''}`, attrs: `data-index="${i}"` }))}
        </div>
      </div>
      <ol class="roue-fiches" role="list">
        ${cr.map((x, i) => html`<li class="roue-fiche${i === 0 ? ' est-active' : ''}" data-index="${i}">
          ${c.media({ nom: x.rond, alt: '', sizes: '88px', classe: 'roue-fiche-rond', attrs: 'data-effet="roue-telephone"' })}
          <p class="roue-num"><span>0${i + 1}</span> / 05 · ${x.anneeCourte}</p>
          <h3 class="roue-titre">${x.titre}</h3>
          <p class="roue-sous">${x.sousTitre}</p>
          <dl class="fiche-mini"><div><dt>${c.t('creations.format')}</dt><dd>${x.formatCourt}</dd></div><div><dt>${c.t('creations.duree')}</dt><dd>${x.duree}</dd></div></dl>
          <p class="roue-accroche">${`« ${x.accroche} »`}</p>
          <p class="roue-liens">${c.lien('creations', { ancre: x.cle, classe: 'lien-fleche', texte: html`${c.t('accueil.roue.decouvrir')}<span class="visuellement-cache"> ${x.titre}</span>` })}</p>
        </li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="dates" id="dates" aria-labelledby="dates-titre">
  <div class="conteneur dates-grille">
    <div class="dates-tete">
      <p class="surtitre" data-anime>${c.t('accueil.dates.sur')}</p>
      <h2 id="dates-titre" class="titre-section" data-anime="lignes">${c.t('accueil.dates.titre')}</h2>
      <p data-anime>${c.t('accueil.dates.texte')}</p>
      <ul class="chiffres" data-anime="cascade">
        <li><strong data-compteur="${c.donnees.agenda.length}">${c.donnees.agenda.length}</strong> ${c.t('accueil.dates.dates')}</li>
        <li><strong data-compteur="${villes}">${villes}</strong> ${c.t('accueil.dates.villes')}</li>
        <li><strong data-compteur="${cr.length}">${cr.length}</strong> ${c.t('accueil.dates.creations')}</li>
      </ul>
      <p data-anime>${c.lien('agenda', { classe: 'bouton bouton--contour', texte: c.t('accueil.dates.tout') })}</p>
    </div>
    <ol class="dates-liste" data-anime="cascade" data-dates-max="4">${prochaines.slice(0, 6).map((d) => ligneDate(c, d))}</ol>
  </div>
</section>

<section class="teasers plateau" id="videos" aria-labelledby="teasers-titre">
  <div class="conteneur">
    <div class="teasers-tete">
      <p class="surtitre" data-anime>${c.t('accueil.teasers.sur')}</p>
      <h2 id="teasers-titre" class="titre-section" data-anime="lignes">${c.t('accueil.teasers.titre')}</h2>
      <p data-anime>${c.t('accueil.teasers.texte')} <span class="note">${c.t('commun.teaserNote')}</span></p>
    </div>
    <div class="teasers-grille">
      <div class="teasers-grand" data-fx="vitesse" data-fx-force="1.5">${teaser(c, parCle.nocturnes, 'teaser-nocturnes', 'teaser--grand')}</div>
      <div class="teasers-petits" data-anime="cascade">
        ${teaser(c, parCle.echo, 'teaser-echo')}
        ${teaser(c, parCle.doline, 'teaser-doline')}
        ${teaser(c, parCle.souffle, 'teaser-souffle')}
      </div>
    </div>
  </div>
</section>

<section class="transmettre" id="transmettre" aria-labelledby="transmettre-titre">
  <div class="conteneur">
    <div class="transmettre-tete">
      <p class="surtitre" data-anime>${c.t('accueil.transmission.sur')}</p>
      <h2 id="transmettre-titre" class="titre-section" data-anime="lignes">${c.t('accueil.transmission.titre')}</h2>
    </div>
    <ul class="cartes-trois" data-anime="cascade">
      ${[['eac', 'transmission-eac'], ['coaching', 'grok/transmission-coaching'], ['dada', 'grok/transmission-dada']].map(([k, img]) => html`<li class="carte-t">
        ${c.media({ nom: img, alt: c.donnees.images[img] ? c.donnees.images[img].alt : '', ratio: '3 / 2', sizes: '(max-width: 760px) 100vw, 30vw', classe: 'carte-t-media' })}
        <h3>${c.t(`accueil.transmission.${k}Titre`)}</h3>
        <p>${c.t(`accueil.transmission.${k}Texte`)}</p>
        ${c.lien('transmission', { ancre: k, classe: 'lien-fleche', texte: html`${c.t('accueil.transmission.lien')}<span class="visuellement-cache"> : ${c.t(`accueil.transmission.${k}Titre`)}</span>` })}
      </li>`)}
    </ul>
  </div>
</section>

<section class="equipe" id="equipe" aria-labelledby="equipe-titre">
  <div class="conteneur">
    <div class="equipe-tete">
      <p class="surtitre" data-anime>${c.t('accueil.equipe.sur')}</p>
      <h2 id="equipe-titre" class="titre-section" data-anime="lignes">${c.t('accueil.equipe.titre')}</h2>
      <p data-anime>${c.t('accueil.equipe.texte')}</p>
    </div>
    <ul class="equipe-liste" data-anime="cascade">
      ${c.donnees.equipe.map((p, i) => html`<li class="portrait" style="--r:${[-4, 3, -2, 4, -3, 2][i]}deg">
        ${c.media({ nom: p.image, alt: '', ratio: '4 / 5', sizes: '(max-width: 760px) 50vw, 16vw', classe: 'portrait-media' })}
        <h3>${p.nom}</h3>
        <p class="portrait-role">${p.role}</p>
        <p class="portrait-texte">${p.texte}</p>
      </li>`)}
    </ul>
  </div>
</section>

<section class="routes" id="lieux" aria-labelledby="routes-titre">
  <div class="routes-ruban" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel data-audit-ignorer>
    <p data-fx-rangee>${routes.slice(0, 16).join(' · ')} · </p>
    <p data-fx-rangee data-sens="-1">${routes.slice(16).join(' · ')} · Limoges · </p>
  </div>
  <div class="conteneur routes-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.routes.sur')}</p>
      <h2 id="routes-titre" class="titre-section" data-anime="lignes">${c.t('accueil.routes.titre')}</h2>
    </div>
    <div class="routes-col">
      <h3 data-anime>${c.t('accueil.routes.soutiens')}</h3>
      <ul class="liste-filet" data-anime="cascade">${c.donnees.lieux.soutiens.map((x) => html`<li>${x}</li>`)}</ul>
    </div>
    <div class="routes-col">
      <h3 data-anime>${c.t('accueil.routes.residences')}</h3>
      <ul class="liste-filet" data-anime="cascade">${c.donnees.lieux.residences.map((x) => html`<li>${x}</li>`)}</ul>
    </div>
  </div>
</section>

${appel(c, { titre: c.t('accueil.appel.titre'), texte: c.t('accueil.appel.texte') })}
`;
};
