/* Agenda : la prochaine date en très grand dans le disque (objet d'ouverture), photo du public ;
   toutes les dates (module agenda-des-dates : à venir, passées repliées, filtres par création, .ics) ;
   carte des villes traversées, dont les points apparaissent saison après saison. */
import { html, brut } from '../../outils/gabarit.mjs';
import { aVenir, partiesDate, ville, creation, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'agenda', fichier: 'agenda', imagePartage: 'agenda-ouverture' };

const TYPE = { inshift: 'InShift', nocturnes: 'NOCTURNES', echo: 'L’écho d’une chute', doline: 'DOLINE', souffle: 'Souffle', mediation: 'Transmission', autre: 'Autres projets' };

export default (c) => {
  const prochaine = aVenir(c)[0];
  const p = prochaine ? partiesDate(prochaine) : null;
  const cr = prochaine ? creation(c, prochaine.creation) : null;
  const im = c.donnees.images['agenda-ouverture'];
  const carte = c.donnees.carte;
  const parVille = {};
  for (const d of c.donnees.agenda) {
    const a = +d.debut.slice(0, 4);
    const v = parVille[d.ville] || (parVille[d.ville] = { n: 0, an: a });
    v.n++; v.an = Math.min(v.an, a);
  }
  const libelles = ['Limoges', 'Paris', 'Bordeaux', 'Besançon', 'Fribourg', 'Colomiers'];
  const forts = ['Limoges', 'Paris', 'Bordeaux', 'Besançon', 'Fribourg', 'Colomiers'];
  const tri = [...c.donnees.agenda].sort((a, b) => (a.debut < b.debut ? -1 : 1));
  return html`
<section class="ouv ouv--agenda" id="debut" aria-labelledby="titre-agenda">
  ${c.media({ nom: 'agenda-ouverture', alt: im.alt, cadrage: im.cadrage, cadrageMobile: im.mobile.cadrage, priorite: true, classe: 'ouv-agenda-photo', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
  <div class="conteneur ouv-agenda-grille">
    <div class="ouv-agenda-texte">
      <p class="surtitre" data-ouv>${c.t('pages.agenda.nav')}</p>
      <h1 class="titre-geant titre-geant--encre titre-geant--moyen" id="titre-agenda" data-anime="gsap"><span class="l">${c.t('agenda.ouverture.l1')}</span> <span class="l">${c.t('agenda.ouverture.l2')} <span class="mot-accent">${c.t('agenda.ouverture.l3')}</span></span></h1>
      ${prochaine ? html`<div class="prochaine" data-prochaine-bloc>
        <div class="prochaine-disque" data-iris-centre="disque" data-effet="date-disque"><span class="prochaine-jour" data-p-jour>${p.jour}</span><span class="prochaine-mois" data-p-mois>${p.mois}</span></div>
        <div class="prochaine-corps" data-ouv>
          <p class="surtitre">${c.t('agenda.ouverture.sur')} · <span data-p-compte>${p.moisLong} ${p.annee}</span></p>
          <p class="prochaine-titre" data-p-titre>${prochaine.titre}</p>
          <p class="prochaine-lieu" data-info-cle data-p-lieu>${prochaine.lieu ? `${prochaine.lieu}, ` : ''}${ville(prochaine)}${p.heure ? ` · ${p.heure}` : ''}</p>
        </div>
      </div>` : ''}
      <p class="ouv-actions" data-ouv><a class="bouton" href="#dates" data-action-principale data-sans-transition>${c.t('agenda.ouverture.toutes')}</a>
        ${cr ? c.lien('creations', { ancre: cr.cle, classe: 'lien-fleche', texte: c.t('agenda.ouverture.voir'), attrs: 'data-p-lien' }) : ''}</p>
    </div>
  </div>
</section>

<section class="agd agenda-dates" id="dates" data-module="agenda-des-dates" aria-labelledby="agd-titre">
  <div class="conteneur">
    <div class="agd__tete">
      <h2 class="agd__h2 titre-section" id="agd-titre" data-anime="lignes">${c.t('agenda.venir.titre')}</h2>
      <p class="agd__intro" data-anime>${c.t('agenda.venir.texte')}</p>
      <p class="agd__prochaine" data-prochaine aria-live="polite"></p>
    </div>
    <div class="agd__outils">
      <div class="agd__filtres" role="group" aria-label="${c.s('agenda.venir.filtres')}"></div>
      <p class="agd__compte" data-compte aria-live="polite"></p>
    </div>
    <div class="agd__cadre" data-visuel>
      <ol class="agd__liste">
        ${tri.map((d) => {
          const q = partiesDate(d);
          const debut = d.debut.includes('T') ? d.debut : d.debut;
          const fin = d.fin ? (d.fin.includes('T') ? d.fin : `${d.fin}T23:59`) : '';
          return html`<li class="agd__date" data-debut="${debut}" data-fin="${fin}" data-type="${TYPE[d.creation]}" data-lieu="${d.lieu ? `${d.lieu}, ` : ''}${ville(d)}">
          <h3 class="agd__titre">${d.titre}</h3>
          <time class="agd__quand" datetime="${d.debut}">${q.jour} ${q.moisLong} ${q.annee}${q.heure ? `, ${q.heure}` : ''}</time>
          <p class="agd__texte">${d.type}${d.note ? ` · ${d.note}` : ''}</p>
        </li>`;
        })}
      </ol>
      <p class="agd__vide" hidden>${c.t('agenda.venir.vide')}</p>
    </div>
  </div>
</section>

<section class="carte-tournee plateau" id="carte" aria-labelledby="carte-titre">
  <div class="conteneur carte-grille">
    <div class="carte-texte">
      <p class="surtitre" data-anime>${c.t('agenda.carte.sur')}</p>
      <h2 id="carte-titre" class="titre-section" data-anime="lignes">${c.t('agenda.carte.titre')}</h2>
      <p data-anime>${c.t('agenda.carte.texte')}</p>
      <p class="carte-annee" aria-hidden="true"><span data-carte-annee>2027</span></p>
      <p class="note" data-anime>${c.t('agenda.carte.legende')}</p>
    </div>
    <figure class="carte-figure" data-effet="carte-tournee" data-visuel>
      <svg class="carte-svg" viewBox="0 0 ${carte.largeur} ${carte.hauteur}" role="img" aria-label="${c.s('agenda.carte.aria')}">
        <path class="carte-france" d="${carte.france}"/>
        ${Object.entries(carte.villes).filter(([v]) => parVille[v]).map(([v, [x, y]]) => html`<g class="carte-point" data-an="${parVille[v].an}"><circle cx="${x}" cy="${y}" r="${Math.min(26, 7 + parVille[v].n * 1.4).toFixed(1)}"/>${libelles.includes(v) ? html`<text${forts.includes(v) ? brut(' class="fort"') : ''} x="${(x + 14).toFixed(0)}" y="${(y + 6).toFixed(0)}">${v === 'Saint-Laurent-de-la-Prée' ? 'St-Laurent-de-la-Prée' : v}</text>` : ''}</g>`)}
      </svg>
      <div class="carte-encart" data-an="2025">
        <p class="carte-encart-pays">${c.t('agenda.carte.togo')}</p>
        <p>Lomé · Agbodrafo</p>
        <p class="carte-encart-n">${c.t('agenda.carte.togoDates', { n: (parVille['Lomé'] ? parVille['Lomé'].n : 0) + (parVille['Agbodrafo'] ? parVille['Agbodrafo'].n : 0) })}</p>
      </div>
    </figure>
  </div>
</section>

${appel(c, { titre: c.t('agenda.appelTitre'), texte: c.t('agenda.appelTexte') })}
`;
};
