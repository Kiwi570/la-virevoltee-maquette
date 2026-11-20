# Compagnie la Virevoltée — maquette

Maquette du nouveau site de la Compagnie la Virevoltée (danse contemporaine, Limoges), direction « Virevolte » : fond lin, plateau sombre, rouge brique du logo, titres Syne ExtraBold et texte Manrope.

- En ligne : https://la-virevoltee-maquette.vercel.app (non indexée par les moteurs de recherche).
- Site actuel : https://cielavirevoltee.wixsite.com/website
- Pages : accueil, Créations, Agenda, Transmission, Contact, page 404.

## Modifier le contenu

Tous les textes et les données sont dans `donnees/` : `textes/fr.json` (textes des pages), `creations.json` (les cinq créations), `agenda.json` (les 55 dates, classées automatiquement selon le jour réel), `equipe.json`, `lieux.json`, `transmission.json`. Après une modification : `node outils/generer.mjs`, qui réécrit les pages HTML. Ne jamais modifier les pages HTML à la main.

Une date ajoutée dans `agenda.json` apparaît d'elle-même sur l'accueil, la page Agenda, la fiche de la création et la carte.

## Ce que la compagnie doit fournir (à compléter)

**Mentions et informations légales**
- Mentions légales : éditeur (Association la Virevoltée, loi 1901, 57b avenue Garibaldi, 87000 Limoges, SIRET 890 194 244 00020, directeur de la publication à préciser), hébergeur (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis, à vérifier au moment de la mise en ligne).
- Politique de confidentialité (formulaire de contact) : à rédiger.
- Crédits photo complets : chaque photo avec son auteur (les crédits connus sont affichés : Aurélie Fieschi, Kathleen Missud, Alex Overton, Annie Bossut, Pierre-Jean Muet, Thierry Laporte, Dimitri Sourzac, Juliette Pascaud, Yao Bobby, 300 Records Média, Abobolais, Komlan Ametogbe). L'auteur des photos de L'écho d'une chute, de l'équipe et des ateliers n'est pas indiqué sur le site actuel.
- Illustrations générées (deux images de la page Transmission : coaching scénique, Dada Collectif) : elles portent la mention « Illustration générée », à garder sur le site final, ou à remplacer par de vraies photos d'atelier.

**Informations retirées ou remplacées faute de source**
- Tarifs et durées du coaching scénique et des ateliers : absents du site actuel ; la page invite à écrire.
- Horaire de NOCTURNES le 5 février 2027 (Centre culturel Jean-Gagnant) : « horaire à venir ».
- Liens de billetterie : aucun sur le site actuel ; les dates proposent seulement « Ajouter à mon agenda ».
- Teaser d'InShift : aucun pour l'instant (la fiche montre les photos).
- Fiches techniques et dossiers de diffusion : non publiés ; à ajouter en téléchargement si la compagnie le souhaite.
- Le Dada Collectif fonctionne-t-il pendant les vacances scolaires ? À préciser pour afficher la date du prochain entraînement.

## Incohérences relevées sur le site actuel
- Deux pages Facebook différentes (en-tête et pied de page) : la maquette garde « Cie la Virevoltée – Mathilde Rader ».
- Orthographes variables : L'Echo / L'écho, ORIG17NES / OR17GINES, Halles'ons / Hall'ons, LI.EL.E.UX / LI.EL.EU.X (la maquette suit l'agenda).
- Texte d'exemple « Titre 1 » et phrase cassée sur la page Médiation ; page Vidéos sans trois des teasers ; menu « Plus » vide.

## Mise en ligne définitive
- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), le formulaire simulé (le relier à une vraie messagerie), les mentions « à compléter » du pied de page une fois les pages écrites.
- Garder : la mention « Illustration générée » sur les images créées par IA.

## Technique
Site statique (HTML, CSS, JavaScript), sans étape de construction, prêt pour Vercel. GSAP pour les animations, polices hébergées avec le site. L'audit automatique est dans `_audit/` (`node _audit/audit.mjs`), son dernier rapport dans `_audit/rapport/`.
