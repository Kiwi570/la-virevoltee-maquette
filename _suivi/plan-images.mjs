// Écrit plan-images.json (décision des emplacements) : node _suivi/plan-images.mjs
import fs from 'node:fs';
const r = (source, nom, role, alt, beaute, extra = {}) => ({ source: 'recu/' + source, nom, role, alt, beaute, ...extra });
const plan = [
  r('logo-sombre.png', 'logo', 'logo', 'Compagnie la Virevoltée', undefined),
  // Accueil
  r('aurelie-fieschi.jpg', 'accueil-ouverture', 'ouverture', 'Une danseuse virevolte devant une paroi de roche, sa jupe fleurie déployée autour d’elle', 5, { mobile: '9:16', zone_texte: 'gauche', page: 'accueil' }),
  r('souffle-compagnie-virevol-3.jpg', 'accueil-demarche', 'galerie', 'Souffle : la danseuse roule au sol, le guitariste joue derrière elle dans la pénombre', 4, { ratio: '4:5', largeurs: [480, 800] }),
  // Les cinq créations, en rond (roue de l’accueil, agenda, ouverture de la page Créations)
  r('creations.jpg', 'rond-inshift', 'vignette', 'InShift : la danseuse, chemise bleue, se plie au-dessus d’un cercle de corde tracé sur le sable, au Togo', 5, { ratio: '1:1', largeurs: [320, 640, 900] }),
  r('nocturnes.jpg', 'rond-nocturnes', 'vignette', 'NOCTURNES : la danseuse et le musicien penchés l’un vers l’autre, un projecteur rond derrière eux', 4, { ratio: '1:1', largeurs: [320, 640, 900] }),
  r('echo-chute-compagnie-virevol-2.png', 'rond-echo', 'vignette', 'L’écho d’une chute : une danseuse en équilibre au-dessus de sa partenaire allongée sur une place grise', 4, { ratio: '1:1', largeurs: [320, 640, 900], cadrage: [64, 50] }),
  r('doline-compagnie-virevol-2.png', 'rond-doline', 'vignette', 'DOLINE : la danseuse sur un cube devant un grand écran bleu-vert, musicien et vidéaste de chaque côté', 4, { ratio: '1:1', largeurs: [320, 640, 900], cadrage: [50, 45] }),
  r('souffle.jpg', 'rond-souffle', 'vignette', 'Souffle : la danseuse et le guitariste assis face à face sur des chaises de jardin', 4, { ratio: '1:1', largeurs: [320, 640, 900] }),
  // Teasers (affiches des vidéos)
  r('nocturnes-compagnie-virevol-5.jpg', 'teaser-nocturnes', 'galerie', 'NOCTURNES : le plateau noir, une rangée de projecteurs ronds et leur reflet sur le sol', 4, { ratio: '16:9', largeurs: [640, 1280] }),
  r('echo-chute-compagnie-virevol.jpg', 'teaser-echo', 'galerie', 'L’écho d’une chute devant le public assis sur les marches d’une halle', 4, { ratio: '16:9', largeurs: [640, 1280] }),
  r('doline-compagnie-virevol.png', 'teaser-doline', 'galerie', 'DOLINE : la danseuse devant une image de forêt projetée', 4, { ratio: '16:9', largeurs: [640, 1280] }),
  r('souffle-compagnie-virevol-2.jpg', 'teaser-souffle', 'galerie', 'Souffle sous les arbres : la danseuse tend le bras, le guitariste joue', 4, { ratio: '16:9', largeurs: [640, 1280] }),
  // Équipe
  r('mathilde-rader.jpg', 'equipe-mathilde', 'portrait', 'Mathilde Rader', 4, { ratio: '4:5' }),
  r('antoine-petit.jpg', 'equipe-antoine', 'portrait', 'Antoine Petit', 4, { ratio: '4:5', cadrage: [22, 50] }),
  r('audrey-allafort.jpg', 'equipe-audrey', 'portrait', 'Audrey Allafort', 4, { ratio: '4:5' }),
  r('juliette-pascaud.jpg', 'equipe-juliette', 'portrait', 'Juliette Pascaud', 3, { ratio: '4:5' }),
  r('dimitri-sourzac.jpg', 'equipe-dimitri', 'portrait', 'Dimitri Sourzac', 4, { ratio: '4:5' }),
  r('olivier-duperron-rogne.jpg', 'equipe-olivier', 'portrait', 'Olivier Duperron', 3, { ratio: '4:5', cadrage: [48, 32] }),
  // Transmission
  r('kathleen-missud.jpg', 'transmission-ouverture', 'ouverture', 'Deux bras qui se tiennent : une main serre l’avant-bras de l’autre danseur', 4, { ratio: '4:5', largeurs: [480, 800, 1200], page: 'transmission' }),
  r('education-artistique-culturelle.jpg', 'transmission-eac', 'vignette', 'Atelier d’éducation artistique : élèves et danseuse en mouvement', 3, { ratio: '3:2', largeurs: [480, 640] }),
  r('caserne.jpg', 'transmission-marceau', 'vignette', 'Si Marceau m’était dansé : les élèves dansent devant la caserne Marceau', 3, { ratio: '3:2', largeurs: [480, 640] }),
  r('titre-1.jpg', 'dada-logo', 'logo', 'Logo du Dada Collectif', undefined),
  r('choregraphe-regard-exterieur-2.jpg', 'choregraphie-beatus', 'galerie', 'Une danseuse en robe rouge face à un musicien jouant d’un instrument ancien à archet', 5, { ratio: '3:2', largeurs: [640, 1200] }),
  r('choregraphe-regard-exterieur.jpg', 'choregraphie-foret', 'galerie', 'Une danseuse en trench immobile au milieu d’une forêt d’automne', 4, { ratio: '3:2', largeurs: [640, 1200] }),
  { source: 'recu/grok/transmission-coaching.jpg', nom: 'grok/transmission-coaching', role: 'galerie', ratio: '3:2', largeurs: [640, 1200], alt: 'Un groupe de musique répète sur une petite scène pendant qu’une danseuse lui montre un geste', beaute: 4, page: 'transmission', emplacement: 'Transmission · Coaching scénique', priorite: 'Conseillée',
    consigne_scene: 'A small rock band (guitar, bass, drummer) rehearsing on the low wooden stage of a small concert hall during the afternoon, seen from the side of the stage; in the foreground, a woman dance coach seen from behind, in a dark loose shirt, raising one arm to show a stage movement to the singer; warm work lights and a few colored stage lights, haze, motion blur on the musicians, no visible faces, no brand names on instruments or amplifiers, no audience.' },
  { source: 'recu/grok/transmission-dada.jpg', nom: 'grok/transmission-dada', role: 'galerie', ratio: '3:2', largeurs: [640, 1200], alt: 'Entraînement de danseurs au sol dans un studio baigné de lumière', beaute: 4, page: 'transmission', emplacement: 'Transmission · Dada Collectif', priorite: 'Conseillée',
    consigne_scene: 'Four contemporary dancers training floorwork together in a bright dance studio with a light grey floor and tall windows, late morning daylight; bodies rolling and pushing off the floor, loose everyday clothes in muted colors, strong motion blur on the moving limbs, faces turned away or hidden by hair and movement; calm, focused, generous mood; nothing on the walls, no mirror reflections of faces, no text.' },
  // Créations : chapitres
  r('creations.jpg', 'inshift-1', 'galerie', 'InShift au Togo : la danseuse se plie au-dessus d’un cercle de corde, le public assis autour', 5, { ratio: '3:2', largeurs: [640, 1200, 1600] }),
  r('regard-exterieur-etienne-gaillochet-2.jpg', 'inshift-2', 'galerie', 'InShift : en noir et blanc, la danseuse tire une corde, concentrée', 5, { ratio: '4:5', largeurs: [480, 800] }),
  r('regard-exterieur-etienne-gaillochet.jpg', 'inshift-3', 'galerie', 'InShift : agenouillée, la danseuse enroule la corde à terre', 4, { ratio: '4:5', largeurs: [480, 800] }),
  r('nocturnes-compagnie-virevol-3.jpg', 'nocturnes-1', 'galerie', 'NOCTURNES : le guitariste joue d’une guitare électrique, la danseuse floue au premier plan', 4, { ratio: '3:2', largeurs: [640, 1200, 1600] }),
  r('nocturnes-compagnie-virevol-4.jpg', 'nocturnes-2', 'galerie', 'NOCTURNES en noir et blanc : le musicien à son clavier, la danseuse en mouvement', 4, { ratio: '4:5', largeurs: [480, 800], cadrage: [70, 55] }),
  r('nocturnes-compagnie-virevol-2.jpg', 'nocturnes-3', 'galerie', 'NOCTURNES : la danseuse et le musicien sur le plateau sombre', 4, { ratio: '4:5', largeurs: [480, 800] }),
  r('echo-chute-compagnie-virevol-2.png', 'echo-1', 'galerie', 'L’écho d’une chute : une danseuse enjambe sa partenaire allongée sur une place grise', 4, { ratio: '3:2', largeurs: [640, 1200, 1600] }),
  r('co-creation-echo-chute.png', 'echo-2', 'galerie', 'L’écho d’une chute : les deux danseuses assises sur un escalier de béton', 4, { ratio: '4:5', largeurs: [480, 800] }),
  r('echo-chute-compagnie-virevol-4.jpg', 'echo-3', 'galerie', 'L’écho d’une chute : une danseuse debout au milieu d’un grand terrain', 3, { ratio: '4:5', largeurs: [480, 800] }),
  r('24-mai-2021-doline.jpg', 'doline-1', 'galerie', 'DOLINE : la danseuse seule dans une lumière violette, au bord du plateau', 4, { ratio: '4:5', largeurs: [480, 800] }),
  r('doline-compagnie-virevol-4.png', 'doline-2', 'galerie', 'DOLINE : la danseuse devant un écran de particules lumineuses', 4, { ratio: '3:2', largeurs: [640, 1200, 1600], cadrage: [45, 45] }),
  r('doline-compagnie-virevol-5.png', 'doline-3', 'galerie', 'DOLINE : une forêt projetée derrière la danseuse', 3, { ratio: '4:5', largeurs: [480, 800], cadrage: [45, 50] }),
  r('souffle-compagnie-virevol.jpg', 'souffle-1', 'galerie', 'Souffle : la danseuse derrière le guitariste, en pleine nature', 4, { ratio: '3:2', largeurs: [640, 1200, 1600] }),
  r('partenaires.jpg', 'souffle-2', 'galerie', 'Souffle joué dans un parc, entre les arbres', 4, { ratio: '4:5', largeurs: [480, 800] }),
  r('souffle-compagnie-virevol-4.jpg', 'souffle-3', 'galerie', 'Souffle en noir et blanc dans un cloître : la danseuse s’élance au-dessus d’une chaise', 3, { ratio: '4:5', largeurs: [480, 800] }),
  // Agenda
  r('echo-chute-compagnie-virevol.jpg', 'agenda-ouverture', 'ouverture', 'Le public assis sur les marches d’une halle regarde une danseuse sur la place', 4, { mobile: '9:16', zone_texte: 'gauche', page: 'agenda' }),
  // Contact
  r('mathilde-rader.jpg', 'contact-mathilde', 'portrait', 'Mathilde Rader, directrice artistique de la compagnie', 4, { ratio: '1:1', largeurs: [480, 800], page: 'contact' }),
  r('nous-contacter.jpg', 'contact-epaule', 'galerie', 'Une main posée sur une épaule, en gros plan', 4, { ratio: '4:5', largeurs: [480, 800] }),
  // Créations : ouverture
  r('nocturnes-compagnie-virevol-5.jpg', 'page-404', '404', 'Un plateau noir, une rangée de projecteurs ronds allumés et leur reflet sur le sol', 4, { mobile: '9:16', zone_texte: 'gauche' }),
  r('regard-exterieur-etienne-gaillochet-2.jpg', 'creations-ouverture', 'ouverture', 'InShift : la danseuse tire une corde, en noir et blanc', 5, { ratio: '16:9', mobile: '4:5', zone_texte: 'gauche', page: 'creations' }),
];
for (const e of plan) if (e.beaute === undefined) delete e.beaute;
fs.writeFileSync('plan-images.json', JSON.stringify(plan, null, 1));
console.log(plan.length, 'entrées');
