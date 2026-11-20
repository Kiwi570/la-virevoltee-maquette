# Rapport d’audit

Projet : `la-virevoltee-maquette` · 20/11/2026 17:18:04 · 15 min · 6 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/creations,/agenda,/transmission,/contact,/404

## Résumé

- Statut : **43 échec(s)**
- Passe : `20261120-160301-rapide-cible` · version ?v=1
- Échecs : **43**
- À regarder : **57**
- Non lancé : **6**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (36), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (9), souris immobile (3)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### contraste insuffisant (2)

- **contraste insuffisant** — `/` — section#lieux > div.routes-ruban:nth-of-type(1) > p:nth-of-type(2) « PÉRIGUEUX · MEUZAC · SAINT-LAURENT-DE-LA-PRÉE · CO » — 1.00:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/transmission` — section#debut > p.credit.credit--trans « Photo © Kathleen Missud » — 1.00:1 (minimum 4.5:1) _(1366×768 normal, 844×390 normal)_

### texte coupé (5)

- **texte coupé** — `/` — h2#appel-titre « PROGRAMMER LA VIREVOLTÉE » — coupé par section#appel « PROGRAMMER LA VIREVOLTÉE Festival, saison culturel » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/404` — h1#titre-404 > span.l « FAUX PAS : CETTE PAGE N’EST PAS AU PROGRAMME » — coupé par section#debut « ERREUR 404 FAUX PAS : CETTE PAGE N’EST PAS AU PROG » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **texte coupé** — `/agenda` — div.ouv-agenda-texte > div.prochaine > div.prochaine-corps:nth-of-type(2) > p.prochaine-titre:nth-of-type(2) « SOUFFLE » — coupé par section#debut « AGENDA LES DATES DE LA VIREVOLTÉE 27 NOV. PROCHAIN » _(320×568 sansJs)_
- **texte coupé** — `/agenda` — h2#appel-titre « ACCUEILLIR LA COMPAGNIE » — coupé par section#appel « ACCUEILLIR LA COMPAGNIE Votre saison, votre festiv » _(320×568 sansJs)_
- **texte coupé** — `/transmission` — h2#appel-titre « UN PROJET AVEC LA COMPAGNIE ? » — coupé par section#appel « UN PROJET AVEC LA COMPAGNIE ? Établissement scolai » _(320×568 sansJs)_

### zone tactile sous 44 px (11)

- **zone tactile sous 44 px** — `/` — div.roue-scene.conteneur:nth-of-type(2) > div.roue-disque > div.roue-anneau:nth-of-type(1) > button.roue-pastille.est-active:nth-of-type(1) « InShift » — 32 × 32 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/` — div.roue-scene.conteneur:nth-of-type(2) > div.roue-disque > div.roue-anneau:nth-of-type(1) > button.roue-pastille:nth-of-type(2) « NOCTURNES » — 32 × 32 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/` — div.roue-scene.conteneur:nth-of-type(2) > div.roue-disque > div.roue-anneau:nth-of-type(1) > button.roue-pastille:nth-of-type(3) « L’écho d’une chute » — 32 × 32 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/` — div.roue-scene.conteneur:nth-of-type(2) > div.roue-disque > div.roue-anneau:nth-of-type(1) > button.roue-pastille:nth-of-type(4) « DOLINE » — 32 × 32 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/` — div.roue-scene.conteneur:nth-of-type(2) > div.roue-disque > div.roue-anneau:nth-of-type(1) > button.roue-pastille:nth-of-type(5) « Souffle » — 32 × 32 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/agenda` — ol.agd__liste > li.agd__date.agd__date--pret > p.agd__actions > button.socle-bouton.agd__ics « Ajouter à mon agenda » — 281 × 30 px _(390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/creations` — nav.bandeau-ronds > ol > li:nth-of-type(1) > a.bandeau-rond « INSHIFT 2027 » — 43 × 143 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/creations` — nav.bandeau-ronds > ol > li:nth-of-type(2) > a.bandeau-rond « NOCTURNES 2025 » — 43 × 202 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/creations` — nav.bandeau-ronds > ol > li:nth-of-type(3) > a.bandeau-rond « L’ÉCHO D’UNE CHUTE 2025 » — 43 × 166 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/creations` — nav.bandeau-ronds > ol > li:nth-of-type(4) > a.bandeau-rond « DOLINE 2022 » — 43 × 139 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/creations` — nav.bandeau-ronds > ol > li:nth-of-type(5) > a.bandeau-rond « SOUFFLE 2021 » — 43 × 160 px _(844×390 normal)_

### accessibilité (axe) : link-name (6)

- **accessibilité (axe) : link-name** — `/` — .entete-logo — Links must have discernible text _(390×844 normal)_
- **accessibilité (axe) : link-name** — `/404` — .entete-logo — Links must have discernible text _(390×844 normal)_
- **accessibilité (axe) : link-name** — `/agenda` — .entete-logo — Links must have discernible text _(390×844 normal)_
- **accessibilité (axe) : link-name** — `/contact` — .entete-logo — Links must have discernible text _(390×844 normal)_
- **accessibilité (axe) : link-name** — `/creations` — .entete-logo — Links must have discernible text _(390×844 normal)_
- **accessibilité (axe) : link-name** — `/transmission` — .entete-logo — Links must have discernible text _(390×844 normal)_

### contraste sur image (3)

- **contraste sur image** — `/404` — h1#titre-404 > span.l « FAUX PAS : CETTE PAGE N’EST PAS AU PROGRAMME » — 1.73:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(390×844 normal)_
- **contraste sur image** — `/404` — section#debut > div.conteneur.ouv-texte:nth-of-type(1) > p.ouv-intro:nth-of-type(2) « Le lien est peut-être ancien, ou la page a changé  » — 3.07:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/404` — section#debut > div.conteneur.ouv-texte:nth-of-type(1) > p.ouv-actions:nth-of-type(3) > a.lien-fleche.lien-fleche--clair:nth-of-type(2) « Voir l’agenda » — 3.21:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-texte:nth-of-type(1) > p.ouv-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Revenir à l’accueil » _(390×844 sansJs, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-texte:nth-of-type(1) > p.ouv-actions:nth-of-type(3) > a.lien-fleche.lien-fleche--clair:nth-of-type(2) « Voir l’agenda » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — div.conteneur.ouv-contact-grille > div.ouv-contact-texte:nth-of-type(2) > p.ouv-actions:nth-of-type(4) > span.ouv-info.ouv-info--encre « Réponse par e-mail ou par téléphone » _(844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/transmission` — section#debut > div.ouv-trans-grille > div.ouv-trans-texte > p.ouv-info.ouv-info--encre:nth-of-type(4) « Dada Collectif : chaque jeudi, 11 h – 13 h, gratui » _(844×390 normal, 320×568 sansJs)_

### textes qui se chevauchent (11)

- **textes qui se chevauchent** — `/agenda` — div.ouv-agenda-texte > div.prochaine > div.prochaine-disque:nth-of-type(1) > span.prochaine-jour:nth-of-type(1) « 27 » — avec div.ouv-agenda-texte > div.prochaine > div.prochaine-disque:nth-of-type(1) > span.prochaine-mois:nth-of-type(2) « NOV. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/agenda` — figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(1) > text — avec figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(16) > text _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/agenda` — figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(6) > text — avec figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(14) > text _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/agenda` — figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(6) > text — avec figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(21) > text _(390×844 sansJs)_
- **textes qui se chevauchent** — `/agenda` — figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(8) > text — avec figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(14) > text _(390×844 sansJs)_
- **textes qui se chevauchent** — `/agenda` — figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(12) > text — avec figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(16) > text _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/agenda` — figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(14) > text — avec figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(21) > text _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/contact` — div:nth-of-type(1) > dl.fiche.fiche--pro > div:nth-of-type(4) > dt « LICENCES D’ENTREPRENEUR DE SPECTACLES » — avec div:nth-of-type(1) > dl.fiche.fiche--pro > div:nth-of-type(4) > dd « L-D-20-005985 (catégorie 2) · L-D-20-005986 (catég » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/creations` — ol > li:nth-of-type(2) > a.bandeau-rond > span.bandeau-nom:nth-of-type(1) « NOCTURNES » — avec ol > li:nth-of-type(3) > a.bandeau-rond > span.bandeau-nom:nth-of-type(1) « L’ÉCHO D’UNE CHUTE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/creations` — ol > li:nth-of-type(2) > a.bandeau-rond > span.bandeau-nom:nth-of-type(1) « NOCTURNES » — avec ol > li:nth-of-type(3) > a.bandeau-rond > span.bandeau-annee:nth-of-type(2) « 2025 » _(844×390 normal)_
- **textes qui se chevauchent** — `/creations` — ol > li:nth-of-type(3) > a.bandeau-rond > span.bandeau-nom:nth-of-type(1) « L’ÉCHO D’UNE CHUTE » — avec ol > li:nth-of-type(4) > a.bandeau-rond > span.bandeau-nom:nth-of-type(1) « DOLINE » _(844×390 normal)_

### texte sous 12 px (1)

- **texte sous 12 px** — `/contact` — div.conteneur.ouv-contact-grille > div.ouv-contact-texte:nth-of-type(2) > p.contact-grand:nth-of-type(3) > a.contact-mail:nth-of-type(2) « cie.lavirevoltee@gmail.com » — 10.9 px _(844×390 normal, 320×568 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (39)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.conteneur.ouv-texte:nth-of-type(1) > p.surtitre.ouv-sur:nth-of-type(1) « COMPAGNIE DE DANSE CONTEMPORAINE · LIMOGES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.conteneur.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(4) > span.ouv-info-label:nth-of-type(1) « PROCHAINE DATE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > p.credit.credit--ouv « Photo © Aurélie Fieschi » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#compagnie > div.conteneur.demarche-grille > div.demarche-texte > p.surtitre:nth-of-type(1) « LA COMPAGNIE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#creations > div.roue-collant > div.conteneur.roue-tete:nth-of-type(1) > p.surtitre:nth-of-type(1) « LES CRÉATIONS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.roue-scene.conteneur:nth-of-type(2) > ol.roue-fiches > li.roue-fiche.est-active:nth-of-type(1) > p.roue-num:nth-of-type(1) « 01 / 05 · 2027 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#videos > div.conteneur > div.teasers-tete:nth-of-type(1) > p.surtitre:nth-of-type(1) « VOIR LA DANSE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.cartes-trois.fx-fini > li.carte-t:nth-of-type(2) > figure.media.carte-t-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.cartes-trois.fx-fini > li.carte-t:nth-of-type(3) > figure.media.carte-t-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#lieux > div.conteneur.routes-grille:nth-of-type(2) > div:nth-of-type(1) > p.surtitre « SUR LES ROUTES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#lieux > div.conteneur.routes-grille:nth-of-type(2) > div.routes-col:nth-of-type(2) > h3 « SOUTIENS ET PARTENAIRES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#lieux > div.conteneur.routes-grille:nth-of-type(2) > div.routes-col:nth-of-type(3) > h3 « ACCUEILS EN RÉSIDENCE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/agenda` — div.ouv-agenda-texte > div.prochaine > div.prochaine-corps:nth-of-type(2) > p.surtitre:nth-of-type(1) « PROCHAINE DATE · DANS 7 JOURS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/agenda` — div.prochaine > div.prochaine-corps:nth-of-type(2) > p.surtitre:nth-of-type(1) > span « DANS 7 JOURS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/agenda` — section#dates > div.conteneur > div.agd__outils:nth-of-type(2) > p.agd__compte « 4 dates à venir » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/agenda` — section#dates > div.conteneur > div.agd__cadre:nth-of-type(3) > h3.agd__groupe-titre.agd__mois-premier « NOVEMBRE 2026 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/agenda` — div.conteneur > div.agd__cadre:nth-of-type(3) > div.agd__groupe:nth-of-type(1) > h3.agd__groupe-titre « DÉCEMBRE 2026 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/agenda` — div.conteneur > div.agd__cadre:nth-of-type(3) > div.agd__groupe:nth-of-type(2) > h3.agd__groupe-titre « FÉVRIER 2027 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div:nth-of-type(1) > dl.fiche.fiche--pro > div:nth-of-type(4) > dt « LICENCES D’ENTREPRENEUR DE SPECTACLES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/creations` — article#inshift > div.conteneur.chapitre-grille > header.chapitre-tete > p.chapitre-num:nth-of-type(1) « 01 / 05 · Création 2027 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/creations` — article#inshift > div.conteneur.chapitre-grille > div.chapitre-galerie:nth-of-type(2) > p.credit « Photos © Yao Bobby, 300 Records Média, Abobolais,  » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/creations` — div.conteneur.chapitre-grille > div.chapitre-plus:nth-of-type(3) > div.chapitre-dates:nth-of-type(2) > h3.mini-titre « PROCHAINES DATES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/creations` — article#nocturnes > div.conteneur.chapitre-grille > header.chapitre-tete > p.chapitre-num:nth-of-type(1) « 02 / 05 · Création 2025 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/creations` — article#nocturnes > div.conteneur.chapitre-grille > div.chapitre-galerie:nth-of-type(2) > p.credit « Photos © Alex Overton » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/creations` — div.conteneur.chapitre-grille > div.chapitre-plus:nth-of-type(3) > div.chapitre-dates:nth-of-type(3) > h3.mini-titre « PROCHAINES DATES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- … et 14 autres (rapport.json)

### section sans visuel (2)

- **section sans visuel** — `/` — section#dates « AGENDA PROCHAINES DATES Rue, médiathèque, centre c » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/contact` — section#demande « VOTRE DEMANDE Trois questions, et la compagnie rev » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### contraste sur image (1)

- **contraste sur image** — `/` — section#debut > p.credit.credit--ouv « Photo © Aurélie Fieschi » — 2.88:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_

### typographie française (6)

- **typographie française** — `/agenda` — section#dates > div.conteneur > div.agd__tete:nth-of-type(1) > p.agd__prochaine:nth-of-type(2) « Prochaine date : Souffle, dans 7 jours » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/creations` — article#inshift > div.conteneur.chapitre-grille > header.chapitre-tete > p.chapitre-accroche:nth-of-type(3) « « Une performance qui se joue et déjoue des codes  » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/creations` — article#nocturnes > div.conteneur.chapitre-grille > header.chapitre-tete > p.chapitre-accroche:nth-of-type(3) « « Entre crépuscules et aubes nocturnes. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/creations` — article#echo > div.conteneur.chapitre-grille > header.chapitre-tete > p.chapitre-accroche:nth-of-type(3) « « Être à l’écoute de soi, des autres, de l’environ » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/creations` — article#doline > div.conteneur.chapitre-grille > header.chapitre-tete > p.chapitre-accroche:nth-of-type(3) « « Une expérience visuelle et sonore. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/creations` — article#souffle > div.conteneur.chapitre-grille > header.chapitre-tete > p.chapitre-accroche:nth-of-type(3) « « Ils communiquent sans toucher, ni parole. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 205 ms (différence 20 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/creations` — à 83 ms (différence 60 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/agenda` — écran différent à la même position après rechargement (4.8 %), voir comparaisons/rechargement-agenda-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/creations` — écran différent à la même position après rechargement (5.5 %), voir comparaisons/rechargement-creations-*.png _(1366×768)_

## Non lancé

- **parcours:menu** : locator.click: Timeout 30000ms exceeded.
- **souris immobile /creations magnetique** : page.screenshot: Target page, context or browser has been closed
- **mouvement** : browser.newContext: Target page, context or browser has been closed
- **vitesse** : browser.newContext: Target page, context or browser has been closed
- **captures** : browser.newContext: Target page, context or browser has been closed
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 49 min de travail pour 75 min de budget, 16 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 11 min pour 5 prévues.
- Audit rapide : étapes lourdes sur /, /agenda, /contact, /creations, /transmission.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2696 ms depuis le premier octet
- Ouverture /agenda (1366×768) : 2649 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2566 ms depuis le premier octet
- Ouverture /creations (1366×768) : 2679 ms depuis le premier octet
- Ouverture /transmission (1366×768) : 2680 ms depuis le premier octet
- Ouverture / (390×844) : 2649 ms depuis le premier octet
- Ouverture /agenda (390×844) : 2644 ms depuis le premier octet
- Ouverture /contact (390×844) : 2593 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /creations (390×844) : 2657 ms depuis le premier octet
- film de l'ouverture /creations 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /transmission (390×844) : 2677 ms depuis le premier octet
- bords de l’écran /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 397 images d’intro, 10 de voile et 161 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /agenda : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /creations : aucune section épinglée ou plein écran.
- Tient dans l'écran /transmission : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 483, tâche la plus longue 0 ms
- Fluidité /agenda 1366×768 (molette) : 0 % d'images lentes sur 237, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 176, tâche la plus longue 0 ms
- Fluidité /creations 1366×768 (molette) : 0 % d'images lentes sur 605, tâche la plus longue 0 ms
- Fluidité /transmission 1366×768 (molette) : 0 % d'images lentes sur 298, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1422, tâche la plus longue 0 ms
- Fluidité /agenda 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /creations 390×844 (doigt) : 0 % d'images lentes sur 1420, tâche la plus longue 0 ms
- Fluidité /transmission 390×844 (doigt) : 0 % d'images lentes sur 1414, tâche la plus longue 0 ms

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours,mouvement,vitesse,captures
```
