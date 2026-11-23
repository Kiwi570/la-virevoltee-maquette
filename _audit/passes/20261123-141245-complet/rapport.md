# Rapport d’audit

Projet : `la-virevoltee-maquette` · 23/11/2026 15:36:28 · 24 min · 6 page(s) · audit complet

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261123-141245-complet` · version ?v=2
- Échecs : **1**
- À regarder : **11**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (5), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (9), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /agenda, /contact |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### clavier (1)

- **clavier** — `/contact` — input «  » — le focus arrive sur un élément caché _(1366×768)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### section sans visuel (1)

- **section sans visuel** — `/` — section#dates « AGENDA PROCHAINES DATES Rue, médiathèque, centre c » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 320×568 sansJs, 375×667 sansJs, 390×844 sansJs, +3)_

### texte de contenu sous 13 px (ordinateur) (1)

- **texte de contenu sous 13 px (ordinateur)** — `/creations` — ol > li:nth-of-type(3) > a.bandeau-rond > span.bandeau-nom:nth-of-type(1) « L’ÉCHO D’UNE CHUTE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1024×768 sansJs, 1024×768 sansWebgl, 1280×720 sansJs, +3)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 207 ms (différence 20 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/agenda` — écran différent à la même position après rechargement (4.9 %), voir comparaisons/rechargement-agenda-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/creations` — écran différent à la même position après rechargement (4.2 %), voir comparaisons/rechargement-creations-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (2)

- **effet qui ne bouge pas au défilement** — `/` — div.portrait-carte — portrait-carte : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/contact` — fieldset.tuiles — tuiles : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2715 ms depuis le premier octet
- Ouverture /agenda (1366×768) : 2682 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2620 ms depuis le premier octet
- Ouverture /creations (1366×768) : 2724 ms depuis le premier octet
- film de l'ouverture /creations 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /transmission (1366×768) : 2784 ms depuis le premier octet
- Ouverture / (390×844) : 2704 ms depuis le premier octet
- Ouverture /agenda (390×844) : 2622 ms depuis le premier octet
- Ouverture /contact (390×844) : 2623 ms depuis le premier octet
- Ouverture /creations (390×844) : 2702 ms depuis le premier octet
- Ouverture /transmission (390×844) : 2683 ms depuis le premier octet
- film de l'ouverture /transmission 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 341 images d’intro, 40 de voile et 178 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /agenda : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /creations : aucune section épinglée ou plein écran.
- Tient dans l'écran /transmission : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 420, tâche la plus longue 54 ms
- Fluidité /agenda 1366×768 (molette) : 0 % d'images lentes sur 236, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 229, tâche la plus longue 0 ms
- Fluidité /creations 1366×768 (molette) : 0 % d'images lentes sur 589, tâche la plus longue 51 ms
- Fluidité /transmission 1366×768 (molette) : 1 % d'images lentes sur 291, tâche la plus longue 77 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1426, tâche la plus longue 0 ms
- Fluidité /agenda 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /creations 390×844 (doigt) : 0 % d'images lentes sur 1440, tâche la plus longue 0 ms
- Fluidité /transmission 390×844 (doigt) : 0 % d'images lentes sur 1426, tâche la plus longue 0 ms
- Vitesse / : 0.58 s de calcul au chargement (téléphone ralenti).
- Vitesse /agenda : 0.47 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /creations : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /transmission : 0.33 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/contact --seulement=fichiers,parcours
```
