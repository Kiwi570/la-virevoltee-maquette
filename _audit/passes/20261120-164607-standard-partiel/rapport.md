# Rapport d’audit

Projet : `la-virevoltee-maquette` · 20/11/2026 17:52:34 · 6 min · 6 page(s) · audit standard (étapes : fichiers, mesures, parcours)

## Résumé

- Statut : **8 échec(s)**
- Passe : `20261120-164607-standard-partiel` · version ?v=1
- Échecs : **8**
- À regarder : **5**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-160301-rapide-cible | rapide | /,/creations,/agenda,/transmission,/contact,/404 | toutes | 43 | 57 | 6 | échecs |
| 20261120-162119-standard | standard | toutes | toutes | 12 | 10 | 2 | échecs |
| **20261120-164607-standard-partiel** (celle-ci) | standard | toutes | fichiers, mesures, parcours | 8 | 5 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.conteneur.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(4) « PROCHAINE DATE 27 nov. · Souffle · Colomiers » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur.ouv-contact-grille > div.ouv-contact-texte:nth-of-type(2) > p.contact-grand:nth-of-type(3) « 06 15 03 16 78 cie.lavirevoltee@gmail.com » _(320×568 normal, 320×568 sansJs)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.conteneur.ouv-texte:nth-of-type(1) > p.ouv-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Programmer un spectacle » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/contact` — div.conteneur.ouv-contact-grille > div.ouv-contact-texte:nth-of-type(2) > p.ouv-actions:nth-of-type(4) > a.bouton « Écrire une demande » _(320×568 normal, 320×568 sansJs)_

### élément recouvert (1)

- **élément recouvert** — `/404` — h1#titre-404 « FAUX PAS : CETTE PAGE N’EST PAS AU PROGRAMME » — par section#debut > div.toupie.toupie--ouverture:nth-of-type(2) > img.toupie-logo _(390×844 normal)_

### débordement horizontal (2)

- **débordement horizontal** — `/` — page large de 324 px — largeurs : 320 px _(balayage 320–1920 normal)_
- **débordement horizontal** — `/contact` — page large de 328 px — largeurs : 320 px _(balayage 320–1920 normal)_

### lien profond (1)

- **lien profond** — `/ → /transmission#dada` — section pas en haut de l'écran (2577 px) _(1366×768 lien profond)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (2)

- **section sans visuel** — `/` — section#dates « AGENDA PROCHAINES DATES Rue, médiathèque, centre c » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/contact` — section#demande « VOTRE DEMANDE Trois questions, et la compagnie rev » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/agenda` — écran différent à la même position après rechargement (4.9 %), voir comparaisons/rechargement-agenda-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/creations` — écran différent à la même position après rechargement (5.0 %), voir comparaisons/rechargement-creations-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 49 min de travail pour 75 min de budget, 16 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 11 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /agenda, /contact, /creations, /transmission.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

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
