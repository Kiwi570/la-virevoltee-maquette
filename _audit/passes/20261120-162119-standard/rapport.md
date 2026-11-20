# Rapport d’audit

Projet : `la-virevoltee-maquette` · 20/11/2026 17:40:45 · 19 min · 6 page(s) · audit standard

## Résumé

- Statut : **12 échec(s)**
- Passe : `20261120-162119-standard` · version ?v=1
- Échecs : **12**
- À regarder : **10**
- Non lancé : **2**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (9), souris immobile (5), vitesse (5), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-160301-rapide-cible | rapide | /,/creations,/agenda,/transmission,/contact,/404 | toutes | 43 | 57 | 6 | échecs |
| **20261120-162119-standard** (celle-ci) | standard | toutes | toutes | 12 | 10 | 2 | échecs |

## Échecs

### texte coupé (1)

- **texte coupé** — `/` — h2#appel-titre « PROGRAMMER LA VIREVOLTÉE » — coupé par section#appel « PROGRAMMER LA VIREVOLTÉE Festival, saison culturel » _(768×1024 normal, 390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.conteneur.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(4) « PROCHAINE DATE 27 nov. · Souffle · Colomiers » _(1366×768 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-texte:nth-of-type(1) > p.ouv-actions:nth-of-type(3) > a.lien-fleche.lien-fleche--clair:nth-of-type(2) « Voir l’agenda » _(1366×768 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/transmission` — section#debut > div.ouv-trans-grille > div.ouv-trans-texte > p.ouv-info.ouv-info--encre:nth-of-type(4) « Dada Collectif : chaque jeudi, 11 h – 13 h, gratui » _(844×390 normal)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-texte:nth-of-type(1) > p.ouv-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Revenir à l’accueil » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/agenda` — div.conteneur.ouv-agenda-grille > div.ouv-agenda-texte > p.ouv-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Toutes les dates à venir » _(320×568 normal, 320×568 sansJs)_

### textes qui se chevauchent (3)

- **textes qui se chevauchent** — `/agenda` — figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(1) > text.fort — avec figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(16) > text _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/agenda` — figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(12) > text — avec figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(16) > text _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/agenda` — figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(14) > text — avec figure.carte-figure > svg.carte-svg > g.carte-point:nth-of-type(21) > text _(1366×768 sansJs)_

### premier écran : titre hors de l’écran (1)

- **premier écran : titre hors de l’écran** — `/contact` — h1#titre-contact « PARLONS DE VOTRE PROJET » — haut 57 px, bas 117 px, zone 65–390 px _(844×390 normal)_

### débordement horizontal (2)

- **débordement horizontal** — `/` — page large de 399 px — largeurs : 320 à 680 px (10 largeurs) _(balayage 320–1920 normal)_
- **débordement horizontal** — `/contact` — page large de 432 px — largeurs : 320, 360, 400 px _(balayage 320–1920 normal)_

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

### section sans visuel (2)

- **section sans visuel** — `/` — section#dates « AGENDA PROCHAINES DATES Rue, médiathèque, centre c » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/contact` — section#demande « VOTRE DEMANDE Trois questions, et la compagnie rev » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 167 ms (différence 20 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/agenda` — écran différent à la même position après rechargement (4.9 %), voir comparaisons/rechargement-agenda-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/creations` — écran différent à la même position après rechargement (5.0 %), voir comparaisons/rechargement-creations-*.png _(1366×768)_

## Non lancé

- **parcours:menu** : locator.click: Timeout 30000ms exceeded.
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
- Audit standard : étapes lourdes sur /, /agenda, /contact, /creations, /transmission.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2714 ms depuis le premier octet
- Ouverture /agenda (1366×768) : 2655 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2616 ms depuis le premier octet
- Ouverture /creations (1366×768) : 2656 ms depuis le premier octet
- Ouverture /transmission (1366×768) : 2658 ms depuis le premier octet
- Ouverture / (390×844) : 2654 ms depuis le premier octet
- Ouverture /agenda (390×844) : 2624 ms depuis le premier octet
- film de l'ouverture /agenda 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2604 ms depuis le premier octet
- Ouverture /creations (390×844) : 2662 ms depuis le premier octet
- Ouverture /transmission (390×844) : 2667 ms depuis le premier octet
- bords de l’écran /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /transmission 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 462 images d’intro, 16 de voile et 193 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /agenda : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /creations : aucune section épinglée ou plein écran.
- Tient dans l'écran /transmission : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 480, tâche la plus longue 0 ms
- Fluidité /agenda 1366×768 (molette) : 0 % d'images lentes sur 225, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 219, tâche la plus longue 0 ms
- Fluidité /creations 1366×768 (molette) : 0 % d'images lentes sur 582, tâche la plus longue 0 ms
- Fluidité /transmission 1366×768 (molette) : 0 % d'images lentes sur 290, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1416, tâche la plus longue 0 ms
- Fluidité /agenda 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Fluidité /creations 390×844 (doigt) : 0 % d'images lentes sur 1424, tâche la plus longue 0 ms
- Fluidité /transmission 390×844 (doigt) : 0 % d'images lentes sur 1429, tâche la plus longue 0 ms
- Vitesse / : 0.58 s de calcul au chargement (téléphone ralenti).
- Vitesse /agenda : 0.56 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /creations : 0.58 s de calcul au chargement (téléphone ralenti).
- Vitesse /transmission : 0.36 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours
```
