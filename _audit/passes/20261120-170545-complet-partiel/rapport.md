# Rapport d’audit

Projet : `la-virevoltee-maquette` · 20/11/2026 18:11:58 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261120-170545-complet-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-160301-rapide-cible | rapide | /,/creations,/agenda,/transmission,/contact,/404 | toutes | 43 | 57 | 6 | échecs |
| 20261120-162119-standard | standard | toutes | toutes | 12 | 10 | 2 | échecs |
| 20261120-164607-standard-partiel | standard | toutes | fichiers, mesures, parcours | 8 | 5 | 0 | échecs |
| 20261120-165741-standard-partiel | standard | toutes | fichiers, mesures, parcours | 1 | 6 | 0 | échecs |
| 20261120-170517-standard-cible-partiel | standard | / | fichiers, mesures | 1 | 2 | 0 | échecs |
| **20261120-170545-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 2 | 3 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.conteneur.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(4) « PROCHAINE DATE 27 nov. · Souffle · Colomiers » _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/contact` — div.conteneur.ouv-contact-grille > div.ouv-contact-texte:nth-of-type(2) > p.ouv-actions:nth-of-type(4) > a.bouton « Écrire une demande » _(375×667 normal, 375×667 sansJs, 375×667 sansWebgl)_

## À regarder

### section sans visuel (2)

- **section sans visuel** — `/` — section#dates « AGENDA PROCHAINES DATES Rue, médiathèque, centre c » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 320×568 sansJs, 375×667 sansJs, 390×844 sansJs, +3)_
- **section sans visuel** — `/contact` — section#demande « VOTRE DEMANDE Trois questions, et la compagnie rev » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 320×568 sansJs, +9)_

### texte de contenu sous 13 px (ordinateur) (1)

- **texte de contenu sous 13 px (ordinateur)** — `/creations` — ol > li:nth-of-type(3) > a.bandeau-rond > span.bandeau-nom:nth-of-type(1) « L’ÉCHO D’UNE CHUTE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1024×768 sansJs, 1024×768 sansWebgl, 1280×720 sansJs, +3)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /agenda : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /creations : aucune section épinglée ou plein écran.
- Tient dans l'écran /transmission : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/contact --seulement=fichiers,mesures
```
