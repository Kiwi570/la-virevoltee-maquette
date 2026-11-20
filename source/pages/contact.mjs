/* Contact : Mathilde Rader dans le disque (objet d'ouverture), téléphone et e-mail en grand ; demande en trois
   parties, préremplie par l'adresse (?sujet=…&creation=…) ; informations pour les programmateurs ; adhésion. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'contact-mathilde' };

export default (c) => {
  const img = (n) => c.donnees.images[n] || {};
  const k = c.site.contact, r = c.site.reseaux;
  const sujets = [['programmation', 'sujetProgrammation'], ['mediation', 'sujetMediation'], ['coaching', 'sujetCoaching'], ['dada', 'sujetDada'], ['autre', 'sujetAutre']];
  const champ = (id, libelle, type = 'text', { requis = false, aide = '', auto = '' } = {}) => html`<div class="champ">
    <label for="${id}">${libelle}${requis ? ' *' : ''}</label>
    <input id="${id}" name="${id}" type="${type}"${requis ? ' required' : ''}${auto ? html` autocomplete="${auto}"` : ''}${aide ? html` aria-describedby="${id}-aide"` : ''}>
    ${aide ? html`<p class="champ-aide" id="${id}-aide">${aide}</p>` : ''}
  </div>`;
  return html`
<section class="ouv ouv--contact" id="debut" aria-labelledby="titre-contact">
  <div class="conteneur ouv-contact-grille">
    <div class="contact-disque" data-iris-centre="disque" data-effet="portrait-disque">
      ${c.media({ nom: 'contact-mathilde', alt: img('contact-mathilde').alt, cadrage: img('contact-mathilde').cadrage, priorite: true, ratio: '1 / 1', sizes: '(max-width: 760px) 56vw, 26vw', classe: 'contact-portrait' })}
    </div>
    <div class="ouv-contact-texte">
      <p class="surtitre" data-ouv>${c.t('contact.ouverture.sur')}</p>
      <h1 class="titre-geant titre-geant--encre titre-geant--moyen" id="titre-contact" data-anime="gsap"><span class="l">${c.t('contact.ouverture.l1')}</span> <span class="l l--accent">${c.t('contact.ouverture.l2')}</span></h1>
      <p class="contact-qui" data-ouv><strong>${c.t('contact.ouverture.nom')}</strong>, ${c.t('contact.ouverture.role')}</p>
      <p class="contact-grand" data-ouv data-info-cle><a href="tel:${k.telephoneLien}">${k.telephone}</a><br><a class="contact-mail" href="mailto:${k.email}">${k.email}</a></p>
      <p class="ouv-actions" data-ouv><a class="bouton" href="#demande" data-action-principale data-sans-transition data-survol="magnetique">${c.t('contact.ouverture.action')}</a> <span class="ouv-info ouv-info--encre">${c.t('contact.ouverture.info')}</span></p>
    </div>
  </div>
</section>

<section class="demande" id="demande" aria-labelledby="demande-titre">
  <div class="conteneur demande-grille">
    <div class="demande-cote">
      <h2 id="demande-titre" class="titre-section" data-anime="lignes">${c.t('contact.demande.titre')}</h2>
      <p data-anime>${c.t('contact.demande.texte')}</p>
      ${c.media({ nom: 'contact-epaule', alt: img('contact-epaule').alt, ratio: '4 / 5', sizes: '(max-width: 760px) 60vw, 28vw', classe: 'demande-media', attrs: 'data-anime="rideau"' })}
    </div>
    <form class="formulaire" data-formulaire novalidate>
      <fieldset class="etape" data-anime>
        <legend><span class="etape-num">1</span> ${c.t('contact.demande.etape1')}</legend>
        <div class="champ">
          <label for="sujet">${c.t('contact.demande.sujet')} *</label>
          <select id="sujet" name="sujet" required>${sujets.map(([v, t]) => html`<option value="${v}">${c.t('contact.demande.' + t)}</option>`)}</select>
        </div>
        <div class="champ">
          <label for="creation">${c.t('contact.demande.creation')}</label>
          <select id="creation" name="creation"><option value="">${c.t('contact.demande.creationAucune')}</option>${c.donnees.creations.map((x) => html`<option value="${x.cle}">${x.titre}</option>`)}</select>
        </div>
      </fieldset>
      <fieldset class="etape" data-anime>
        <legend><span class="etape-num">2</span> ${c.t('contact.demande.etape2')}</legend>
        ${champ('periode', c.s('contact.demande.periode'), 'text', { aide: c.s('contact.demande.periodeAide') })}
        ${champ('lieu', c.s('contact.demande.lieu'), 'text', { aide: c.s('contact.demande.lieuAide') })}
      </fieldset>
      <fieldset class="etape" data-anime>
        <legend><span class="etape-num">3</span> ${c.t('contact.demande.etape3')}</legend>
        ${champ('nom', c.s('contact.demande.nomChamp'), 'text', { requis: true, auto: 'name' })}
        ${champ('structure', c.s('contact.demande.structure'), 'text', { auto: 'organization' })}
        ${champ('email', c.s('contact.demande.email'), 'email', { requis: true, auto: 'email' })}
        ${champ('telephone', c.s('contact.demande.telephone'), 'tel', { auto: 'tel' })}
        <div class="champ"><label for="message">${c.t('contact.demande.message')} *</label><textarea id="message" name="message" rows="5" required></textarea></div>
      </fieldset>
      <p class="rgpd">${c.t('contact.demande.rgpd')} ${c.t('commun.confidentialite')}.</p>
      <p><button type="submit" class="bouton">${c.t('contact.demande.envoyer')}</button></p>
      <p class="message-envoi" data-message-envoi data-texte="${c.s('contact.demande.simule')}" tabindex="-1" role="status" hidden></p>
    </form>
  </div>
</section>

<section class="pro plateau" id="programmateurs" aria-labelledby="pro-titre">
  <div class="conteneur pro-grille">
    <div>
      <h2 id="pro-titre" class="titre-section" data-anime="lignes">${c.t('contact.pro.titre')}</h2>
      <p data-anime>${c.t('contact.pro.association')}</p>
      <dl class="fiche fiche--pro" data-anime="cascade">
        <div><dt>${c.t('contact.pro.siege')}</dt><dd>${k.adresse}</dd></div>
        <div><dt>${c.t('contact.pro.siret')}</dt><dd>890 194 244 00020</dd></div>
        <div><dt>${c.t('contact.pro.ape')}</dt><dd>9001Z</dd></div>
        <div><dt>${c.t('contact.pro.licences')}</dt><dd>${c.t('contact.pro.licencesValeur')}</dd></div>
        <div><dt>${c.t('contact.pro.bureau')}</dt><dd>${c.t('contact.pro.bureauValeur')}</dd></div>
      </dl>
    </div>
    <div class="soutenir" data-anime>
      <img class="soutenir-logo" src="/assets/images/logo-160.png" alt="" width="120" height="120" loading="lazy" data-effet="logo-tourne" data-visuel>
      <h2 class="titre-section titre-section--petit">${c.t('contact.soutenir.titre')}</h2>
      <p>${c.t('contact.soutenir.texte')}</p>
      <p class="soutenir-liens"><a class="bouton bouton--clair" href="${r.helloasso}" target="_blank" rel="noopener">${c.t('commun.adherer')} <span class="visuellement-cache">${c.t('commun.nouvelOnglet')}</span></a>
        <a class="lien-fleche" href="${r.instagram}" target="_blank" rel="noopener">Instagram <span class="visuellement-cache">${c.t('commun.nouvelOnglet')}</span></a>
        <a class="lien-fleche" href="${r.facebook}" target="_blank" rel="noopener">Facebook <span class="visuellement-cache">${c.t('commun.nouvelOnglet')}</span></a></p>
    </div>
  </div>
</section>
`;
};
