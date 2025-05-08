export type Nutrition = {
  kcal: number;
  protein: number;
  saturatedFats: number;
  unsaturatedFats: number;
  carbs: number;
};

export type Translation = {
  english: string;
  german: string;
  italian: string;
  french: string;
  spanish: string;
};

export type BeefCut = {
  id: string;
  name: Translation;
  nutrition: Nutrition;
  preparation: Translation[];
};

export const beefCuts: BeefCut[] = [
  {
    id: "1",
    name: {
      english: "Short Rib",
      german: "Kurze Rippe",
      italian: "Costina corta",
      french: "Basses côtes",
      spanish: "Costilla corta",
    },
    nutrition: {
      kcal: 200,
      protein: 19,
      saturatedFats: 8,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Stews: 1. Sear both sides for 3–4 min per side in a pan. 2. Place ribs with aromatics in a pot/Dutch oven. 3. Cook low and slow: Time: 2–3 hours or more. Target internal temperature: 90–96°C (195–205°F).",
        german:
          "Schmorgerichte: 1. Beide Seiten 3–4 Minuten pro Seite in einer Pfanne anbraten. 2. Rippchen mit Aromaten in einen Topf oder Bräter geben. 3. Langsam und bei niedriger Hitze garen: Zeit: 2–3 Stunden oder länger. Ziel-Kerntemperatur: 90–96°C.",
        italian:
          "Stufati: 1. Rosolare entrambi i lati per 3–4 minuti per lato in una padella. 2. Mettere le costine con aromi in una pentola o casseruola. 3. Cuocere a fuoco lento: Tempo: 2–3 ore o più. Temperatura interna target: 90–96°C.",
        french:
          "Ragoûts : 1. Saisir les deux côtés pendant 3–4 minutes de chaque côté dans une poêle. 2. Placer les côtes avec des aromates dans une cocotte. 3. Cuire lentement : Temps : 2–3 heures ou plus. Température interne cible : 90–96°C.",
        spanish:
          "Guisos: 1. Sellar ambos lados durante 3–4 minutos por lado en una sartén. 2. Colocar las costillas con aromáticos en una olla o cazuela. 3. Cocinar a fuego lento: Tiempo: 2–3 horas o más. Temperatura interna objetivo: 90–96°C.",
      },
      {
        english:
          "Frying Pan: 1. Preheat pan with oil. 2. Sear 2–4 minutes per side. 3. Rest for 3–5 minutes. Doneness: Rare: 50–52°C (122–125°F); Medium-Rare: 54–57°C (130–135°F); Medium: 60–63°C (140–145°F); Medium-Well: 65–68°C (150–155°F); Well-Done: 70°C (160+°F).",
        german:
          "Pfanne: 1. Pfanne mit Öl vorheizen. 2. 2–4 Minuten pro Seite anbraten. 3. 3–5 Minuten ruhen lassen. Garstufen: Rare: 50–52°C; Medium-Rare: 54–57°C; Medium: 60–63°C; Medium-Well: 65–68°C; Well-Done: 70°C+.",
        italian:
          "Padella: 1. Preriscaldare la padella con olio. 2. Rosolare 2–4 minuti per lato. 3. Riposare per 3–5 minuti. Cottura: Al sangue: 50–52°C; Media al sangue: 54–57°C; Media: 60–63°C; Ben cotta: 65–68°C; Ben cotta: 70°C+.",
        french:
          "Poêle : 1. Préchauffer la poêle avec de l'huile. 2. Saisir 2–4 minutes de chaque côté. 3. Laisser reposer 3–5 minutes. Cuisson : Saignant : 50–52°C ; À point : 54–57°C ; Moyen : 60–63°C ; Bien cuit : 65–68°C ; Très bien cuit : 70°C+.",
        spanish:
          "Sartén: 1. Precalentar la sartén con aceite. 2. Sellar 2–4 minutos por lado. 3. Reposar 3–5 minutos. Cocción: Poco hecho: 50–52°C; Medio poco hecho: 54–57°C; Medio: 60–63°C; Bien cocido: 65–68°C; Muy bien cocido: 70°C+.",
      },
      {
        english:
          "Grill: 1. Preheat grill to medium-high heat. 2. Season and place ribs over indirect heat. 3. Grill for 20–30 minutes, turning occasionally. 4. For a charred finish, sear briefly over direct heat. Target internal temperature: 90–96°C (195–205°F).",
        german:
          "Grill: 1. Grill auf mittlere bis hohe Hitze vorheizen. 2. Rippchen würzen und über indirekter Hitze platzieren. 3. 20–30 Minuten grillen und gelegentlich wenden. 4. Für Röstaromen kurz über direkter Hitze anbraten. Ziel-Kerntemperatur: 90–96°C.",
        italian:
          "Griglia: 1. Preriscaldare la griglia a calore medio-alto. 2. Condire e posizionare le costine su calore indiretto. 3. Grigliare per 20–30 minuti girandole ogni tanto. 4. Per una finitura croccante, rosolare brevemente su calore diretto. Temperatura interna target: 90–96°C.",
        french:
          "Grill : 1. Préchauffer le gril à feu moyen-élevé. 2. Assaisonner et placer les côtes sur une chaleur indirecte. 3. Griller pendant 20–30 minutes en retournant de temps en temps. 4. Pour une finition grillée, saisir brièvement sur feu direct. Température interne cible : 90–96°C.",
        spanish:
          "Parrilla: 1. Precalentar la parrilla a fuego medio-alto. 2. Sazonar y colocar las costillas sobre calor indirecto. 3. Asar durante 20–30 minutos, girando ocasionalmente. 4. Para un acabado tostado, sellar brevemente sobre fuego directo. Temperatura interna objetivo: 90–96°C.",
      },
    ],
  },
  {
    id: "2",
    name: {
      english: "Ribeye",
      german: "Ribeye",
      italian: "Costata disossata",
      french: "Côte de bœuf désossée",
      spanish: "Ojo de bife",
    },
    nutrition: {
      kcal: 290,
      protein: 20,
      saturatedFats: 12,
      unsaturatedFats: 10,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Grilling: 1. Preheat grill to high. 2. Sear 2-3 min per side. 3. Lower heat and cook to desired doneness.\nRare: 50–52°C (122–125°F)\nMedium-Rare: 54–57°C (130–135°F)\nMedium: 60–63°C (140–145°F)\nMedium-Well: 65–68°C (150–155°F)\nWell-Done: 70°C (160+°F)",
        german:
          "Grillen: 1. Grill auf hohe Hitze vorheizen. 2. 2–3 Min. pro Seite scharf anbraten. 3. Hitze reduzieren und bis zur gewünschten Garstufe weitergaren.\nRare: 50–52°C\nMedium-Rare: 54–57°C\nMedium: 60–63°C\nMedium-Well: 65–68°C\nWell-Done: 70°C+",
        italian:
          "Griglia: 1. Preriscalda la griglia a fuoco alto. 2. Rosola 2–3 min per lato. 3. Abbassa il calore e cuoci al punto desiderato.\nAl sangue: 50–52°C\nMedia cottura: 54–57°C\nMedia: 60–63°C\nBen cotta: 70°C+",
        french:
          "Grillade : 1. Préchauffez le gril à feu vif. 2. Saisir 2–3 min de chaque côté. 3. Réduire le feu et cuire selon la cuisson désirée.\nSaignant : 50–52°C\nÀ point : 60–63°C\nBien cuit : 70°C+",
        spanish:
          "A la parrilla: 1. Precalienta la parrilla a fuego alto. 2. Marca 2–3 min por lado. 3. Baja el fuego y cocina al punto deseado.\nPoco hecho: 50–52°C\nPunto medio: 60–63°C\nBien hecho: 70°C+",
      },
      {
        english:
          "Frying pan: 1. Preheat pan with oil. 2. Sear 2–4 minutes per side. 3. Rest 3–5 minutes.\nRare: 50–52°C\nMedium-Rare: 54–57°C\nMedium: 60–63°C\nMedium-Well: 65–68°C\nWell-Done: 70°C+",
        german:
          "Pfanne: 1. Pfanne mit Öl erhitzen. 2. 2–4 Minuten pro Seite anbraten. 3. 3–5 Minuten ruhen lassen.\nRare: 50–52°C\nMedium-Rare: 54–57°C\nMedium: 60–63°C\nMedium-Well: 65–68°C\nWell-Done: 70°C+",
        italian:
          "Padella: 1. Scalda la padella con olio. 2. Cuoci 2–4 minuti per lato. 3. Lascia riposare 3–5 minuti.\nAl sangue: 50–52°C\nMedia cottura: 54–57°C\nBen cotta: 70°C+",
        french:
          "Poêle : 1. Chauffer la poêle avec un peu d’huile. 2. Saisir 2–4 min de chaque côté. 3. Laisser reposer 3–5 min.\nSaignant : 50–52°C\nÀ point : 60–63°C\nBien cuit : 70°C+",
        spanish:
          "Sartén: 1. Calienta la sartén con aceite. 2. Cocina 2–4 min por lado. 3. Reposa 3–5 min.\nPoco hecho: 50–52°C\nMedio: 60–63°C\nBien hecho: 70°C+",
      },
      {
        english:
          "Oven roasting: 1. Sear in pan for 2–3 minutes per side. 2. Transfer to oven at 180°C (356°F). 3. Cook until desired doneness. Use thermometer for accuracy.",
        german:
          "Ofen: 1. Kurz in Pfanne anbraten (2–3 Min. pro Seite). 2. Im Ofen bei 180°C fertig garen. 3. Kerntemperatur prüfen für gewünschte Garstufe.",
        italian:
          "Forno: 1. Rosolare in padella 2–3 min per lato. 2. Cuocere in forno a 180°C. 3. Controllare temperatura interna.",
        french:
          "Four : 1. Saisir à la poêle 2–3 min par face. 2. Finir la cuisson au four à 180°C. 3. Vérifier la température interne.",
        spanish:
          "Horno: 1. Dorar en sartén 2–3 min por lado. 2. Terminar en horno a 180°C. 3. Verificar temperatura interna.",
      },
      {
        english:
          "Smoked: Season with salt and pepper, smoke at 95–110°C (203–230°F) until internal temperature reaches 54–57°C (130–135°F) for medium-rare. Let rest before slicing thinly for sandwiches or salads.",
        german:
          "Geräuchert: Mit Salz und Pfeffer würzen, bei 95–110°C räuchern, bis 54–57°C Kerntemperatur erreicht sind (medium-rare). Ruhen lassen, dann dünn aufschneiden.",
        italian:
          "Affumicato: Condire con sale e pepe, affumicare a 95–110°C fino a 54–57°C al cuore (media cottura). Far riposare e affettare finemente.",
        french:
          "Fumé : Assaisonnez, fumez à 95–110°C jusqu’à 54–57°C à cœur (à point). Laissez reposer, puis tranchez finement.",
        spanish:
          "Ahumado: Sazonar con sal y pimienta, ahumar a 95–110°C hasta que alcance 54–57°C (punto medio). Reposar y cortar en lonchas finas.",
      },
    ],
  },
  {
    id: "3",
    name: {
      english: "Short Sirloin",
      german: "Hüftsteak",
      italian: "Fesa di manzo",
      french: "Rumsteck",
      spanish: "Cadera de res",
    },
    nutrition: {
      kcal: 190,
      protein: 21,
      saturatedFats: 5,
      unsaturatedFats: 4,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Stews: 1. Cube the meat. 2. Brown in hot oil 3–4 min per side. 3. Simmer in liquid with aromatics for 1.5–2.5 hrs. Target temp: 90–95°C (194–203°F).",
        german:
          "Schmorgerichte: 1. In Würfel schneiden. 2. In heißem Öl 3–4 Min. pro Seite anbraten. 3. Mit Flüssigkeit und Gewürzen 1,5–2,5 Std. schmoren. Zieltemp: 90–95°C.",
        italian:
          "Stufati: 1. Tagliare a cubetti. 2. Rosolare 3–4 min per lato. 3. Cuocere con liquido e aromi per 1,5–2,5 ore. Temp. interna: 90–95°C.",
        french:
          "Ragoûts : 1. Couper en cubes. 2. Saisir 3–4 min de chaque côté. 3. Mijoter 1,5 à 2,5 h avec liquide et aromates. Température : 90–95°C.",
        spanish:
          "Guisos: 1. Cortar en cubos. 2. Dorar 3–4 min por lado. 3. Cocinar en líquido con hierbas por 1,5–2,5 h. Temp: 90–95°C.",
      },
      {
        english:
          "Frying Pan: 1. Preheat pan with oil. 2. Sear 2–4 minutes per side. 3. Rest 5 min. Doneness: Rare: 50–52°C; Medium-Rare: 54–57°C; Medium: 60–63°C; Medium-Well: 65–68°C; Well-Done: 70°C+.",
        german:
          "Pfanne: 1. Pfanne mit Öl erhitzen. 2. 2–4 Min. pro Seite braten. 3. 5 Min. ruhen lassen. Garstufen: Rare: 50–52°C; Medium-Rare: 54–57°C; Medium: 60–63°C; Medium-Well: 65–68°C; Well-Done: 70°C+.",
        italian:
          "Padella: 1. Scaldare l’olio. 2. Cuocere 2–4 min per lato. 3. Riposare 5 min. Cottura: Al sangue: 50–52°C; Media: 60–63°C.",
        french:
          "Poêle : 1. Chauffer l’huile. 2. Cuire 2–4 min par face. 3. Repos 5 min. Cuisson : Saignant : 50–52°C ; À point : 60–63°C.",
        spanish:
          "Sartén: 1. Calentar aceite. 2. Sellar 2–4 min por lado. 3. Reposar 5 min. Cocción: Poco hecho: 50–52°C; Hecho: 60–63°C.",
      },
      {
        english:
          "Grill: 1. Preheat to high heat. 2. Grill 3–4 min per side. 3. Rest 5–7 min. Doneness guide same as pan method.",
        german:
          "Grill: 1. Stark vorheizen. 2. 3–4 Min. pro Seite grillen. 3. 5–7 Min. ruhen lassen. Garstufen wie Pfanne.",
        italian:
          "Griglia: 1. Riscaldare bene. 2. 3–4 min per lato. 3. Riposo 5–7 min. Cottura come da padella.",
        french:
          "Grill : 1. Chauffer fortement. 2. 3–4 min par côté. 3. Repos 5–7 min. Cuisson comme à la poêle.",
        spanish:
          "Parrilla: 1. Calor fuerte. 2. 3–4 min por lado. 3. Reposo 5–7 min. Cocción igual que en sartén.",
      },
      {
        english:
          "Raw or Smoked: Can be lightly smoked or sliced thin as roast beef. Excellent cold on bread with mustard or horseradish.",
        german:
          "Roh oder geräuchert: Kann leicht geräuchert oder dünn als Roastbeef serviert werden. Hervorragend kalt auf Brot mit Senf oder Meerrettich.",
        italian:
          "Crudo o affumicato: Può essere affumicato leggermente o affettato come roast beef. Ottimo freddo su pane con senape.",
        french:
          "Cru ou fumé : Peut être légèrement fumé ou servi en tranches comme roast beef. Parfait froid sur pain avec moutarde.",
        spanish:
          "Crudo o ahumado: Puede ahumarse ligeramente o cortarse fino como roast beef. Ideal frío en pan con mostaza.",
      },
    ],
  },
  {
    id: "4",
    name: {
      english: "Tenderloin",
      german: "Filet",
      italian: "Filetto",
      french: "Filet",
      spanish: "Solomillo",
    },
    nutrition: {
      kcal: 180,
      protein: 22,
      saturatedFats: 4,
      unsaturatedFats: 3,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Stews: 1. Rarely used in stews due to tenderness. 2. If used, add at the end to avoid overcooking. 3. Simmer gently for 10–15 min. Internal temp: 55–60°C (131–140°F).",
        german:
          "Schmorgerichte: 1. Aufgrund der Zartheit selten verwendet. 2. Wenn doch, erst am Ende zugeben. 3. Sanft 10–15 Min. garen. Kerntemperatur: 55–60°C.",
        italian:
          "Stufati: 1. Poco usato per la sua tenerezza. 2. Se usato, aggiungerlo alla fine. 3. Cuocere dolcemente per 10–15 min. Temp. interna: 55–60°C.",
        french:
          "Ragoûts : 1. Rarement utilisé car très tendre. 2. À ajouter en fin de cuisson. 3. Mijoter doucement 10–15 min. Temp. interne : 55–60°C.",
        spanish:
          "Guisos: 1. Poco común por su ternura. 2. Si se usa, añadir al final. 3. Cocinar suave 10–15 min. Temp. interna: 55–60°C.",
      },
      {
        english:
          "Frying Pan: 1. Sear 2–3 min per side in very hot pan. 2. Baste with butter and herbs. 3. Rest 5 minutes. Doneness: Rare: 48–50°C; Medium-Rare: 52–55°C; Medium: 57–60°C.",
        german:
          "Pfanne: 1. 2–3 Min. pro Seite bei hoher Hitze anbraten. 2. Mit Butter und Kräutern begießen. 3. 5 Min. ruhen lassen. Garstufen: Rare: 48–50°C; Medium-Rare: 52–55°C; Medium: 57–60°C.",
        italian:
          "Padella: 1. 2–3 min per lato in padella molto calda. 2. Irrorare con burro ed erbe. 3. Riposare 5 min. Cottura: Al sangue: 48–50°C; Media: 57–60°C.",
        french:
          "Poêle : 1. 2–3 min par côté à feu vif. 2. Arroser de beurre et herbes. 3. Repos 5 min. Cuisson : Saignant : 48–50°C ; À point : 57–60°C.",
        spanish:
          "Sartén: 1. Sellar 2–3 min por lado a fuego alto. 2. Regar con mantequilla y hierbas. 3. Reposar 5 min. Término: Poco hecho: 48–50°C; Medio: 57–60°C.",
      },
      {
        english:
          "Grill: 1. Preheat grill high. 2. Grill 2–3 min per side. 3. Baste with butter. 4. Let rest. Doneness: Rare: 48–50°C; Medium-Rare: 52–55°C; Medium: 57–60°C.",
        german:
          "Grill: 1. Grill stark vorheizen. 2. 2–3 Min. pro Seite grillen. 3. Mit Butter bestreichen. 4. Ruhen lassen. Garstufen wie oben.",
        italian:
          "Griglia: 1. Griglia molto calda. 2. 2–3 min per lato. 3. Condire con burro. 4. Riposo. Cottura: come sopra.",
        french:
          "Grill : 1. Préchauffer fortement. 2. Griller 2–3 min par face. 3. Beurrer légèrement. 4. Repos. Cuisson : comme ci-dessus.",
        spanish:
          "Parrilla: 1. Precalentar fuerte. 2. 2–3 min por lado. 3. Untar con mantequilla. 4. Reposar. Cocción: como arriba.",
      },
      {
        english:
          "Raw or Smoked: Slice thin for carpaccio or tenderloin tartare. Can be cold-smoked and served thin like bresaola. Ideal on bread with olive oil and arugula.",
        german:
          "Roh oder geräuchert: Dünn geschnitten als Carpaccio oder Filet-Tatar. Kann kalt geräuchert werden wie Bresaola. Ideal auf Brot mit Olivenöl und Rucola.",
        italian:
          "Crudo o affumicato: Affettato sottile per carpaccio o tartare di filetto. Anche affumicato a freddo come la bresaola. Ottimo su pane con olio e rucola.",
        french:
          "Cru ou fumé : En tranches fines pour carpaccio ou tartare. Peut être fumé à froid comme la bresaola. Parfait sur pain avec huile d’olive et roquette.",
        spanish:
          "Crudo o ahumado: En lonchas finas como carpaccio o tartar. Puede ahumarse en frío como bresaola. Ideal en pan con aceite y rúcula.",
      },
    ],
  },
  {
    id: "5",
    name: {
      english: "Rump Steak",
      german: "Hüftsteak",
      italian: "Fesa",
      french: "Rumsteck",
      spanish: "Bistec de cadera",
    },
    nutrition: {
      kcal: 190,
      protein: 27.4,
      saturatedFats: 4.1,
      unsaturatedFats: 6.2,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Pan-fried: 1. Season with salt and pepper. 2. Sear in a hot pan 2–3 minutes per side. 3. Rest 5 minutes before serving.",
        german:
          "Gebraten: 1. Mit Salz und Pfeffer würzen. 2. In heißer Pfanne 2–3 Minuten pro Seite braten. 3. 5 Minuten ruhen lassen.",
        italian:
          "In padella: 1. Condire con sale e pepe. 2. Cuocere in padella calda 2–3 minuti per lato. 3. Riposare 5 minuti.",
        french:
          "À la poêle: 1. Assaisonner. 2. Cuire à feu vif 2–3 min par côté. 3. Laisser reposer 5 min.",
        spanish:
          "A la sartén: 1. Sazonar con sal y pimienta. 2. Sellar 2–3 minutos por lado. 3. Reposar 5 minutos antes de servir.",
      },
    ],
  },
  {
    id: "6",
    name: {
      english: "Chuck",
      german: "Bugstück",
      italian: "Cappello del prete",
      french: "Épaule (collier/paleron)",
      spanish: "Aguja",
    },
    nutrition: {
      kcal: 220,
      protein: 20,
      saturatedFats: 9,
      unsaturatedFats: 7,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Stews: 1. Cube or slice the chuck. 2. Brown pieces in oil. 3. Add aromatics and liquid. 4. Simmer for 2.5–3 hours until tender. Target temperature: 90–96°C (195–205°F).",
        german:
          "Schmoren: 1. Fleisch würfeln oder in Scheiben schneiden. 2. In Öl anbraten. 3. Mit Aromaten und Flüssigkeit ablöschen. 4. 2,5–3 Stunden schmoren. Zieltemperatur: 90–96 °C.",
        italian:
          "Stufati: 1. Tagliare a cubetti o fette. 2. Rosolare in olio. 3. Aggiungere aromi e liquido. 4. Cuocere a fuoco basso per 2,5–3 ore. Temperatura interna: 90–96°C.",
        french:
          "Ragoûts: 1. Couper en cubes. 2. Faire revenir à l’huile. 3. Ajouter aromates et liquide. 4. Mijoter 2,5–3h. Température cible : 90–96°C.",
        spanish:
          "Estofados: 1. Cortar en cubos o lonchas. 2. Dorar con aceite. 3. Añadir aromáticos y líquido. 4. Cocinar 2,5–3 h. Temp. interna: 90–96 °C.",
      },
      {
        english:
          "Oven roast: 1. Preheat oven to 150°C (300°F). 2. Sear chuck roast. 3. Place in roasting pan with broth and aromatics. 4. Cover and roast for 3–4 hours until fork-tender.",
        german:
          "Ofenbraten: 1. Ofen auf 150 °C vorheizen. 2. Fleisch anbraten. 3. In Bräter mit Brühe und Aromaten legen. 4. Abgedeckt 3–4 Stunden garen.",
        italian:
          "Arrosto al forno: 1. Forno a 150 °C. 2. Rosolare il pezzo. 3. Infornare con brodo e aromi. 4. Coprire e cuocere per 3–4 ore.",
        french:
          "Rôti au four: 1. Préchauffer à 150°C. 2. Saisir la viande. 3. Mettre dans plat avec bouillon/aromates. 4. Cuire couvert 3–4h.",
        spanish:
          "Asado al horno: 1. Precalentar a 150 °C. 2. Sellar la carne. 3. Colocar en fuente con caldo y aromáticos. 4. Hornear cubierto 3–4 h.",
      },
      {
        english:
          "Grilled (thin-cut steaks): 1. Slice across the grain into 1.5–2 cm steaks. 2. Marinate for 4–6 hours. 3. Grill 2–3 min per side over high heat. Internal temp: 55–63°C.",
        german:
          "Gegrillt (dünne Steaks): 1. In 1,5–2 cm Scheiben schneiden. 2. 4–6 h marinieren. 3. Je Seite 2–3 Min grillen. Kerntemperatur: 55–63 °C.",
        italian:
          "Grigliato (bistecche sottili): 1. Tagliare a 1,5–2 cm. 2. Marinare 4–6 h. 3. Grigliare 2–3 min per lato. Temp. interna: 55–63 °C.",
        french:
          "Grillé (fines tranches): 1. Couper en tranches de 1,5–2 cm. 2. Mariner 4–6 h. 3. Griller 2–3 min par face. Température: 55–63 °C.",
        spanish:
          "A la parrilla (filetes finos): 1. Cortar a 1,5–2 cm. 2. Marinar 4–6 h. 3. Asar 2–3 min por lado. Temp. interna: 55–63 °C.",
      },
      {
        english:
          "Smoked (chuck roast): 1. Apply dry rub. 2. Smoke at 110–120°C (230–250°F) for 5–6 hours. 3. Wrap in foil after bark forms. 4. Continue to 90–95°C internal temperature.",
        german:
          "Geräuchert (Braten): 1. Mit Rub würzen. 2. Bei 110–120 °C 5–6 Std. räuchern. 3. In Folie wickeln. 4. Bis 90–95 °C Kerntemperatur garen.",
        italian:
          "Affumicato: 1. Condire con rub secco. 2. Affumicare a 110–120°C per 5–6 h. 3. Avvolgere in alluminio. 4. Cuocere fino a 90–95°C.",
        french:
          "Fumé: 1. Frotter avec épices. 2. Fumer à 110–120°C pendant 5–6 h. 3. Envelopper. 4. Cuire jusqu’à 90–95°C.",
        spanish:
          "Ahumado: 1. Frotar con especias. 2. Ahumar a 110–120 °C por 5–6 h. 3. Envolver. 4. Cocinar hasta 90–95 °C internos.",
      },
    ],
  },
  {
    id: "7",
    name: {
      english: "Flank",
      german: "Bauchlappen",
      italian: "Bavetta",
      french: "Bavette",
      spanish: "Falda",
    },
    nutrition: {
      kcal: 192,
      protein: 22,
      saturatedFats: 4,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Grilled: 1. Marinate 4–6 hours. 2. Preheat grill to high. 3. Grill 3–4 minutes per side. 4. Rest 5 min, then slice thinly across the grain. Internal temp: 54–57°C for medium-rare.",
        german:
          "Gegrillt: 1. 4–6 Std. marinieren. 2. Grill stark vorheizen. 3. 3–4 Min pro Seite grillen. 4. 5 Min ruhen lassen, quer zur Faser dünn schneiden. Kerntemperatur: 54–57 °C.",
        italian:
          "Grigliata: 1. Marinare 4–6 ore. 2. Scaldare la griglia. 3. Grigliare 3–4 min per lato. 4. Riposare 5 min, tagliare sottile contro fibra. Temp. interna: 54–57 °C.",
        french:
          "Grillée: 1. Mariner 4–6 h. 2. Chauffer le gril. 3. Griller 3–4 min chaque côté. 4. Repos 5 min, couper fin contre fibre. Temp. interne: 54–57 °C.",
        spanish:
          "A la parrilla: 1. Marinar 4–6 h. 2. Precalentar parrilla. 3. Asar 3–4 min por lado. 4. Reposar 5 min, cortar fino contra fibra. Temp. interna: 54–57 °C.",
      },
      {
        english:
          "Pan-seared: 1. Preheat pan. 2. Sear 3–4 min per side with oil. 3. Let rest 5 minutes. 4. Slice thinly across the grain.",
        german:
          "Gebraten: 1. Pfanne vorheizen. 2. 3–4 Min pro Seite anbraten. 3. 5 Min ruhen lassen. 4. Dünn gegen die Faser schneiden.",
        italian:
          "In padella: 1. Scaldare padella. 2. Rosolare 3–4 min per lato. 3. Riposare 5 min. 4. Affettare contro fibra.",
        french:
          "Poêlée: 1. Chauffer la poêle. 2. 3–4 min de chaque côté. 3. Repos 5 min. 4. Couper fin contre la fibre.",
        spanish:
          "A la sartén: 1. Calentar sartén. 2. Sellar 3–4 min por lado. 3. Reposar 5 min. 4. Cortar fino contra fibra.",
      },
      {
        english:
          "Sous-vide: 1. Season and vacuum-seal. 2. Cook at 54°C for 2 hours. 3. Sear 1 min per side in hot pan. 4. Slice against the grain.",
        german:
          "Sous-vide: 1. Würzen und vakuumieren. 2. Bei 54 °C für 2 Std. garen. 3. 1 Min pro Seite scharf anbraten. 4. Gegen die Faser schneiden.",
        italian:
          "Sous-vide: 1. Condire e sigillare. 2. Cuocere a 54 °C per 2 ore. 3. Rosolare 1 min per lato. 4. Tagliare contro fibra.",
        french:
          "Sous-vide: 1. Assaisonner et sceller. 2. Cuire à 54 °C pendant 2 h. 3. Saisir 1 min par face. 4. Trancher contre la fibre.",
        spanish:
          "Sous-vide: 1. Sazonar y sellar. 2. Cocinar a 54 °C por 2 h. 3. Sellar 1 min por lado. 4. Cortar contra fibra.",
      },
      {
        english:
          "Smoked: 1. Marinate or dry rub. 2. Smoke at 110–120°C (230–250°F) for 2–3 hours. 3. Finish with sear or grill. 4. Rest and slice thinly.",
        german:
          "Geräuchert: 1. Marinieren oder Rub verwenden. 2. Bei 110–120 °C 2–3 Std. räuchern. 3. Am Ende anbraten oder grillen. 4. Ruhen lassen und dünn schneiden.",
        italian:
          "Affumicato: 1. Marinare o usare rub. 2. Affumicare a 110–120 °C per 2–3 ore. 3. Rosolare o grigliare. 4. Riposare e affettare sottile.",
        french:
          "Fumé: 1. Mariner ou frotter à sec. 2. Fumer à 110–120 °C pendant 2–3 h. 3. Finir par saisie ou grill. 4. Repos et tranchage fin.",
        spanish:
          "Ahumado: 1. Marinar o aplicar rub. 2. Ahumar a 110–120 °C por 2–3 h. 3. Terminar con sellado o parrilla. 4. Reposar y cortar fino.",
      },
    ],
  },
  {
    id: "8",
    name: {
      english: "Plate",
      german: "Querrippe",
      italian: "Pancia anteriore",
      french: "Plat de côtes",
      spanish: "Costillar",
    },
    nutrition: {
      kcal: 220,
      protein: 18,
      saturatedFats: 9,
      unsaturatedFats: 7,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Braised: 1. Sear both sides for 4 min in a pan. 2. Deglaze with stock/wine. 3. Add aromatics. 4. Cover and cook in oven or on stovetop at low heat for 3–4 hours until tender. Internal temperature: 90–96°C (195–205°F).",
        german:
          "Geschmort: 1. Beidseitig 4 Min anbraten. 2. Mit Brühe/Wein ablöschen. 3. Gewürze hinzufügen. 4. Zugedeckt 3–4 Std. bei niedriger Hitze garen. Kerntemperatur: 90–96 °C.",
        italian:
          "Brasato: 1. Rosolare 4 min per lato. 2. Sfumare con brodo/vino. 3. Aggiungere aromi. 4. Cuocere coperto 3–4 ore a fuoco basso. Temp. interna: 90–96 °C.",
        french:
          "Braisé: 1. Saisir 4 min chaque face. 2. Déglacer au bouillon/vin. 3. Ajouter des aromates. 4. Cuire couvert à feu doux 3–4 h. Temp. interne : 90–96 °C.",
        spanish:
          "Estofado: 1. Sellar 4 min por lado. 2. Desglasar con caldo/vino. 3. Añadir aromáticos. 4. Cocinar tapado 3–4 h a fuego lento. Temp. interna: 90–96 °C.",
      },
      {
        english:
          "Grilled: 1. Marinate 6–8 hours. 2. Grill over medium heat 3–5 minutes per side. 3. Let rest 5 min. Slice thin across the grain. Best served medium to medium-well.",
        german:
          "Gegrillt: 1. 6–8 Std. marinieren. 2. Bei mittlerer Hitze 3–5 Min pro Seite grillen. 3. 5 Min ruhen lassen. Quer zur Faser dünn schneiden.",
        italian:
          "Grigliata: 1. Marinare 6–8 ore. 2. Grigliare 3–5 min per lato a calore medio. 3. Riposare 5 min. Affettare sottile contro fibra.",
        french:
          "Grillée: 1. Mariner 6–8 h. 2. Griller 3–5 min par côté à feu moyen. 3. Repos 5 min. Trancher fin contre la fibre.",
        spanish:
          "A la parrilla: 1. Marinar 6–8 h. 2. Asar 3–5 min por lado a fuego medio. 3. Reposar 5 min. Cortar fino contra fibra.",
      },
      {
        english:
          "Smoked: 1. Dry rub generously. 2. Smoke at 110–120°C (230–250°F) for 4–6 hours. 3. Wrap in foil and rest. Internal temperature: 90–95°C.",
        german:
          "Geräuchert: 1. Großzügig mit Rub würzen. 2. Bei 110–120 °C 4–6 Std. räuchern. 3. In Folie einwickeln und ruhen lassen. Kerntemperatur: 90–95 °C.",
        italian:
          "Affumicato: 1. Condire abbondantemente con rub. 2. Affumicare a 110–120 °C per 4–6 ore. 3. Avvolgere in alluminio e riposare. Temp. interna: 90–95 °C.",
        french:
          "Fumé: 1. Frotter généreusement d’épices. 2. Fumer à 110–120 °C pendant 4–6 h. 3. Envelopper et laisser reposer. Temp. interne : 90–95 °C.",
        spanish:
          "Ahumado: 1. Aplicar rub generosamente. 2. Ahumar a 110–120 °C por 4–6 h. 3. Envolver y reposar. Temp. interna: 90–95 °C.",
      },
    ],
  },
  {
    id: "9",
    name: {
      english: "Spider Steak",
      german: "Fledermaus",
      italian: "Bistecca del ragno",
      french: "Araignée",
      spanish: "Corte de araña",
    },
    nutrition: {
      kcal: 250,
      protein: 20,
      saturatedFats: 10,
      unsaturatedFats: 8,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Grilled: 1. Bring to room temperature. 2. Season with salt and pepper. 3. Grill over high heat for 2–3 min per side. 4. Rest 5 min. Serve medium-rare to medium.",
        german:
          "Gegrillt: 1. Raumtemperatur erreichen lassen. 2. Mit Salz und Pfeffer würzen. 3. Bei hoher Hitze 2–3 Min pro Seite grillen. 4. 5 Min ruhen lassen.",
        italian:
          "Grigliata: 1. Portare a temperatura ambiente. 2. Condire con sale e pepe. 3. Grigliare 2–3 min per lato a fuoco vivo. 4. Riposare 5 min.",
        french:
          "Grillée: 1. Amener à température ambiante. 2. Assaisonner de sel et poivre. 3. Griller 2–3 min par côté à feu vif. 4. Repos 5 min.",
        spanish:
          "A la parrilla: 1. Llevar a temperatura ambiente. 2. Sazonar con sal y pimienta. 3. Asar 2–3 min por lado a fuego alto. 4. Reposar 5 min.",
      },
      {
        english:
          "Pan-seared: 1. Heat pan to high. 2. Season steak and add oil. 3. Sear 2–3 min per side. 4. Rest and slice across the grain.",
        german:
          "Gebraten: 1. Pfanne stark erhitzen. 2. Steak würzen, Öl hinzufügen. 3. 2–3 Min pro Seite braten. 4. Ruhen lassen, quer zur Faser schneiden.",
        italian:
          "Saltata in padella: 1. Scaldare bene la padella. 2. Condire la bistecca, aggiungere olio. 3. Rosolare 2–3 min per lato. 4. Riposare, tagliare contro fibra.",
        french:
          "Poêlée: 1. Chauffer la poêle à feu vif. 2. Assaisonner, ajouter huile. 3. Saisir 2–3 min chaque face. 4. Repos, trancher contre la fibre.",
        spanish:
          "A la sartén: 1. Calentar sartén a fuego alto. 2. Sazonar y añadir aceite. 3. Dorar 2–3 min por lado. 4. Reposar y cortar contra fibra.",
      },
      {
        english:
          "Sous-vide: 1. Vacuum seal and cook at 54°C (129°F) for 1.5 hours. 2. Sear quickly on high heat to finish. 3. Rest briefly and slice.",
        german:
          "Sous-vide: 1. Vakuumieren und bei 54 °C 1,5 Std. garen. 2. Kurz scharf anbraten. 3. Kurz ruhen lassen und aufschneiden.",
        italian:
          "Sous-vide: 1. Sottovuoto a 54 °C per 1,5 ore. 2. Scottare a fuoco vivo. 3. Far riposare e affettare.",
        french:
          "Sous-vide: 1. Cuire à 54 °C pendant 1,5 h sous vide. 2. Saisir à feu vif. 3. Laisser reposer, puis trancher.",
        spanish:
          "Sous-vide: 1. Sellar al vacío y cocinar a 54 °C por 1,5 h. 2. Dorar rápidamente. 3. Reposar y cortar.",
      },
    ],
  },
  {
    id: "10",
    name: {
      english: "Thick Skirt",
      german: "Dicke Rippe",
      italian: "Diaframma interno",
      french: "Hampe épaisse",
      spanish: "Entraña gruesa",
    },
    nutrition: {
      kcal: 240,
      protein: 21,
      saturatedFats: 8,
      unsaturatedFats: 9,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Grilled: 1. Marinate 4–6 hours. 2. Grill on high heat for 3–4 min per side. 3. Rest 5 min. Slice thinly against the grain.",
        german:
          "Gegrillt: 1. 4–6 Std. marinieren. 2. Bei hoher Hitze 3–4 Min pro Seite grillen. 3. 5 Min ruhen lassen. Quer zur Faser dünn schneiden.",
        italian:
          "Grigliata: 1. Marinare 4–6 ore. 2. Grigliare 3–4 min per lato a fuoco alto. 3. Riposare 5 min. Affettare contro fibra.",
        french:
          "Grillée: 1. Mariner 4–6 h. 2. Griller 3–4 min par côté à feu vif. 3. Repos 5 min. Trancher fin contre la fibre.",
        spanish:
          "A la parrilla: 1. Marinar 4–6 h. 2. Asar 3–4 min por lado a fuego alto. 3. Reposar 5 min. Cortar fino contra fibra.",
      },
      {
        english:
          "Stir-fried: 1. Slice thin across the grain. 2. Marinate briefly. 3. Stir-fry in hot wok with oil for 1–2 min until browned.",
        german:
          "Gebraten (Wok): 1. Dünn quer zur Faser schneiden. 2. Kurz marinieren. 3. Im heißen Wok 1–2 Min mit Öl anbraten.",
        italian:
          "Saltata: 1. Tagliare sottile contro fibra. 2. Marinare brevemente. 3. Saltare in padella calda con olio per 1–2 min.",
        french:
          "Sauté: 1. Trancher fin contre la fibre. 2. Mariner brièvement. 3. Sauter à feu vif avec de l’huile 1–2 min.",
        spanish:
          "Salteado: 1. Cortar fino contra fibra. 2. Marinar brevemente. 3. Saltear en wok caliente con aceite 1–2 min.",
      },
      {
        english:
          "Pan-seared: 1. Pat dry and season. 2. Sear in hot pan 3–4 min per side. 3. Rest 5 min. Slice thin across the grain.",
        german:
          "Gebraten: 1. Abtupfen und würzen. 2. In heißer Pfanne 3–4 Min pro Seite braten. 3. 5 Min ruhen lassen. Dünn quer zur Faser schneiden.",
        italian:
          "Saltata in padella: 1. Asciugare e condire. 2. Rosolare in padella calda 3–4 min per lato. 3. Riposare 5 min. Affettare sottile.",
        french:
          "Poêlée: 1. Sécher et assaisonner. 2. Saisir 3–4 min chaque face. 3. Repos 5 min. Trancher finement.",
        spanish:
          "A la sartén: 1. Secar y sazonar. 2. Dorar 3–4 min por lado en sartén caliente. 3. Reposar 5 min. Cortar fino.",
      },
    ],
  },
  {
    id: "11",
    name: {
      english: "Rump Steak",
      german: "Hüftsteak",
      italian: "Fesa",
      french: "Rumsteck",
      spanish: "Cuadril",
    },
    nutrition: {
      kcal: 210,
      protein: 23,
      saturatedFats: 6,
      unsaturatedFats: 7,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Grilled: 1. Season simply with salt and pepper. 2. Grill over high heat for 3–4 min per side for medium-rare. 3. Rest 5 min before slicing.",
        german:
          "Gegrillt: 1. Mit Salz und Pfeffer würzen. 2. Bei hoher Hitze 3–4 Min pro Seite grillen (medium-rare). 3. 5 Min ruhen lassen.",
        italian:
          "Grigliata: 1. Condire con sale e pepe. 2. Grigliare 3–4 min per lato a fuoco alto. 3. Riposare 5 min.",
        french:
          "Grillée: 1. Assaisonner avec sel et poivre. 2. Griller 3–4 min par côté à feu vif. 3. Repos 5 min.",
        spanish:
          "A la parrilla: 1. Sazonar con sal y pimienta. 2. Asar 3–4 min por lado a fuego alto. 3. Reposar 5 min.",
      },
      {
        english:
          "Pan-seared: 1. Heat skillet to high. 2. Sear 3–4 min per side. 3. Add butter and herbs to baste. 4. Rest 5 min.",
        german:
          "Gebraten: 1. Pfanne stark erhitzen. 2. 3–4 Min pro Seite anbraten. 3. Mit Butter und Kräutern übergießen. 4. 5 Min ruhen lassen.",
        italian:
          "Saltata: 1. Scaldare padella. 2. Rosolare 3–4 min per lato. 3. Irrorare con burro ed erbe. 4. Riposare 5 min.",
        french:
          "Poêlée: 1. Chauffer la poêle. 2. Saisir 3–4 min par côté. 3. Arroser de beurre et herbes. 4. Repos 5 min.",
        spanish:
          "A la sartén: 1. Calentar sartén. 2. Dorar 3–4 min por lado. 3. Regar con mantequilla y hierbas. 4. Reposar 5 min.",
      },
      {
        english:
          "Oven-roasted: 1. Sear all sides in a hot pan. 2. Transfer to 180°C (350°F) oven and roast until internal temp reaches 55–57°C (130–135°F) for medium-rare. 3. Rest 10 min.",
        german:
          "Im Ofen: 1. Rundum anbraten. 2. Bei 180 °C weitergaren bis 55–57 °C Kerntemperatur (medium-rare). 3. 10 Min ruhen lassen.",
        italian:
          "Al forno: 1. Rosolare tutti i lati. 2. Cuocere in forno a 180 °C fino a 55–57 °C interni. 3. Riposare 10 min.",
        french:
          "Rôti au four: 1. Saisir toutes les faces. 2. Cuire au four à 180 °C jusqu’à 55–57 °C. 3. Repos 10 min.",
        spanish:
          "Al horno: 1. Sellar todos los lados. 2. Hornear a 180 °C hasta 55–57 °C internos. 3. Reposar 10 min.",
      },
    ],
  },
  {
    id: "12",
    name: {
      english: "Skirt Steak",
      german: "Saumfleisch",
      italian: "Diaframma esterno",
      french: "Bavette",
      spanish: "Entraña fina",
    },
    nutrition: {
      kcal: 235,
      protein: 22,
      saturatedFats: 7,
      unsaturatedFats: 9,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Grilled: 1. Marinate 6 hours for tenderness. 2. Grill over high heat 2–3 min per side. 3. Rest 5 min. Slice thinly across the grain.",
        german:
          "Gegrillt: 1. 6 Std. marinieren. 2. Bei hoher Hitze 2–3 Min pro Seite grillen. 3. 5 Min ruhen lassen. Quer zur Faser dünn schneiden.",
        italian:
          "Grigliata: 1. Marinare 6 ore. 2. Grigliare 2–3 min per lato a fuoco alto. 3. Riposare 5 min. Tagliare contro fibra.",
        french:
          "Grillée: 1. Mariner 6 h. 2. Griller 2–3 min par côté à feu vif. 3. Repos 5 min. Trancher finement contre la fibre.",
        spanish:
          "A la parrilla: 1. Marinar 6 h. 2. Asar 2–3 min por lado a fuego alto. 3. Reposar 5 min. Cortar fino contra la fibra.",
      },
      {
        english:
          "Pan-seared: 1. Pat dry, season well. 2. Sear in hot skillet 2–3 min per side. 3. Rest before slicing thin.",
        german:
          "Gebraten: 1. Abtupfen, gut würzen. 2. In heißer Pfanne 2–3 Min pro Seite braten. 3. Ruhen lassen und dünn schneiden.",
        italian:
          "Saltata in padella: 1. Asciugare, condire. 2. Rosolare 2–3 min per lato. 3. Riposare e affettare sottile.",
        french:
          "Poêlée: 1. Sécher, assaisonner. 2. Saisir 2–3 min chaque côté. 3. Repos, trancher fin.",
        spanish:
          "A la sartén: 1. Secar y sazonar. 2. Dorar 2–3 min por lado. 3. Reposar y cortar fino.",
      },
      {
        english:
          "Stir-fried: 1. Cut into thin strips. 2. Marinate briefly. 3. Stir-fry over high heat 1–2 min. Serve hot.",
        german:
          "Wok: 1. In dünne Streifen schneiden. 2. Kurz marinieren. 3. 1–2 Min bei hoher Hitze braten. Heiß servieren.",
        italian:
          "Saltata: 1. Tagliare a strisce sottili. 2. Marinare brevemente. 3. Saltare 1–2 min a fuoco vivo.",
        french:
          "Sauté: 1. Couper en lanières fines. 2. Mariner rapidement. 3. Sauter à feu vif 1–2 min.",
        spanish:
          "Salteado: 1. Cortar en tiras finas. 2. Marinar brevemente. 3. Saltear 1–2 min a fuego alto.",
      },
    ],
  },
  {
    id: "13",
    name: {
      english: "Hanger Steak",
      german: "Hängeschenkelsteak",
      italian: "Bistecca di gancio",
      french: "Bavette d'aloyau",
      spanish: "Solomillo de falda",
    },
    nutrition: {
      kcal: 280,
      protein: 24,
      saturatedFats: 9,
      unsaturatedFats: 11,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Grilled: 1. Marinate for 4–6 hours to enhance tenderness. 2. Grill over high heat for 3–4 min per side. 3. Let rest before slicing thinly against the grain.",
        german:
          "Gegrillt: 1. 4–6 Std. marinieren. 2. Bei hoher Hitze 3–4 Min pro Seite grillen. 3. Ruhen lassen und quer zur Faser dünn schneiden.",
        italian:
          "Grigliata: 1. Marinare per 4–6 ore. 2. Grigliare 3–4 min per lato a fuoco alto. 3. Riposare e tagliare sottile contro fibra.",
        french:
          "Grillée: 1. Mariner 4–6 h. 2. Griller 3–4 min par côté à feu vif. 3. Repos, puis trancher fin contre la fibre.",
        spanish:
          "A la parrilla: 1. Marinar 4–6 h. 2. Asar 3–4 min por lado a fuego alto. 3. Reposar y cortar fino contra la fibra.",
      },
      {
        english:
          "Pan-seared: 1. Season with salt and pepper. 2. Sear in hot pan for 3–4 min per side. 3. Rest 5 min before slicing thin across the grain.",
        german:
          "Gebraten: 1. Mit Salz und Pfeffer würzen. 2. In heißer Pfanne 3–4 Min pro Seite braten. 3. 5 Min ruhen lassen und dünn quer zur Faser schneiden.",
        italian:
          "Saltata in padella: 1. Condire con sale e pepe. 2. Rosolare 3–4 min per lato in padella calda. 3. Riposare 5 min e affettare contro fibra.",
        french:
          "Poêlée: 1. Assaisonner de sel et poivre. 2. Saisir 3–4 min chaque face. 3. Repos 5 min avant de trancher finement contre la fibre.",
        spanish:
          "A la sartén: 1. Sazonar con sal y pimienta. 2. Dorar 3–4 min por lado en sartén caliente. 3. Reposar 5 min y cortar fino contra fibra.",
      },
      {
        english:
          "Sous-vide: 1. Seal in a vacuum bag and cook at 55°C (130°F) for 2 hours. 2. Sear briefly in a hot pan to finish. 3. Rest before slicing.",
        german:
          "Sous-vide: 1. Vakuumieren und bei 55 °C für 2 Stunden garen. 2. Kurz in einer heißen Pfanne anbraten. 3. Ruhen lassen und aufschneiden.",
        italian:
          "Sous-vide: 1. Sottovuoto a 55 °C per 2 ore. 2. Rosolare brevemente in padella calda. 3. Riposare e affettare.",
        french:
          "Sous-vide: 1. Cuire sous vide à 55 °C pendant 2 h. 2. Saisir rapidement dans une poêle chaude. 3. Laisser reposer et trancher.",
        spanish:
          "Sous-vide: 1. Cocinar a 55 °C durante 2 h al vacío. 2. Sellar brevemente en sartén caliente. 3. Reposar y cortar.",
      },
    ],
  },
  {
    id: "14",
    name: {
      english: "Baron of Beef",
      german: "Baron vom Rind",
      italian: "Barone di manzo",
      french: "Baron de boeuf",
      spanish: "Barón de res",
    },
    nutrition: {
      kcal: 270,
      protein: 25,
      saturatedFats: 10,
      unsaturatedFats: 11,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Roasted: 1. Season generously with salt, pepper, and herbs. 2. Roast at 180°C (350°F) for 1.5–2 hours depending on size. 3. Rest for 15–20 min before carving.",
        german:
          "Geröstet: 1. Großzügig mit Salz, Pfeffer und Kräutern würzen. 2. Bei 180 °C 1,5–2 Std. rösten. 3. 15–20 Min ruhen lassen und dann aufschneiden.",
        italian:
          "Arrosto: 1. Condire con sale, pepe e erbe. 2. Cuocere in forno a 180 °C per 1,5–2 ore. 3. Riposare 15–20 min prima di affettare.",
        french:
          "Rôti: 1. Assaisonner généreusement avec du sel, du poivre et des herbes. 2. Rôtir à 180 °C pendant 1,5–2 h. 3. Laisser reposer 15–20 min avant de trancher.",
        spanish:
          "Asado: 1. Sazonar generosamente con sal, pimienta y hierbas. 2. Asar a 180 °C durante 1,5–2 horas. 3. Reposar 15–20 min antes de cortar.",
      },
      {
        english:
          "Grilled: 1. Rub with olive oil, salt, and pepper. 2. Grill over medium-high heat for 4–5 minutes per side. 3. Let rest for 10 minutes before slicing.",
        german:
          "Gegrillt: 1. Mit Olivenöl, Salz und Pfeffer einreiben. 2. Bei mittelhoher Hitze 4–5 Min pro Seite grillen. 3. 10 Min ruhen lassen und dann aufschneiden.",
        italian:
          "Grigliato: 1. Spalmare con olio d'oliva, sale e pepe. 2. Grigliare a fuoco medio-alto 4–5 minuti per lato. 3. Riposare 10 min prima di affettare.",
        french:
          "Grillée: 1. Frotter avec de l'huile d'olive, du sel et du poivre. 2. Griller 4–5 min par côté à feu moyen-vif. 3. Repos 10 min avant de trancher.",
        spanish:
          "A la parrilla: 1. Frotar con aceite de oliva, sal y pimienta. 2. Asar 4–5 min por lado a fuego medio-alto. 3. Reposar 10 min antes de cortar.",
      },
      {
        english:
          "Sous-vide: 1. Seal in a vacuum bag and cook at 56°C (132°F) for 6 hours. 2. Sear briefly in a hot pan to finish. 3. Rest for 10 minutes before serving.",
        german:
          "Sous-vide: 1. Vakuumieren und bei 56 °C 6 Std. garen. 2. Kurz in heißer Pfanne anbraten. 3. 10 Min ruhen lassen und dann servieren.",
        italian:
          "Sous-vide: 1. Cuocere sottovuoto a 56 °C per 6 ore. 2. Rosolare brevemente in padella calda. 3. Riposare 10 min prima di servire.",
        french:
          "Sous-vide: 1. Cuire sous vide à 56 °C pendant 6 h. 2. Saisir brièvement dans une poêle chaude. 3. Repos 10 min avant de servir.",
        spanish:
          "Sous-vide: 1. Cocinar a 56 °C durante 6 h al vacío. 2. Sellar brevemente en sartén caliente. 3. Reposar 10 min antes de servir.",
      },
    ],
  },
  {
    id: "15",
    name: {
      english: "Flank Steak",
      german: "Flankensteak",
      italian: "Bistecca di fianco",
      french: "Bavette de flanchet",
      spanish: "Filete de falda",
    },
    nutrition: {
      kcal: 192,
      protein: 28,
      saturatedFats: 4,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Grilled: 1. Marinate in olive oil, garlic, and soy sauce for 2–4 hours. 2. Grill over high heat for 3–4 minutes per side. 3. Rest 10 min and slice against the grain.",
        german:
          "Gegrillt: 1. 2–4 Std. in Olivenöl, Knoblauch und Sojasauce marinieren. 2. Bei starker Hitze 3–4 Min pro Seite grillen. 3. 10 Min ruhen lassen und quer zur Faser aufschneiden.",
        italian:
          "Grigliato: 1. Marinare per 2–4 ore in olio d'oliva, aglio e salsa di soia. 2. Grigliare a fuoco alto per 3–4 min per lato. 3. Riposare 10 min e tagliare contro fibra.",
        french:
          "Grillée: 1. Mariner 2–4 h dans huile d’olive, ail et sauce soja. 2. Griller 3–4 min de chaque côté à feu vif. 3. Laisser reposer 10 min et trancher contre le grain.",
        spanish:
          "A la parrilla: 1. Marinar 2–4 h en aceite de oliva, ajo y salsa de soya. 2. Asar a fuego alto 3–4 min por lado. 3. Reposar 10 min y cortar contra la fibra.",
      },
      {
        english:
          "Pan-seared: 1. Season well with salt and pepper. 2. Sear in hot cast iron pan for 4 minutes per side. 3. Rest and slice thinly across the grain.",
        german:
          "Gebraten: 1. Gut mit Salz und Pfeffer würzen. 2. In heißer Gusseisenpfanne je 4 Min pro Seite anbraten. 3. Ruhen lassen und quer zur Faser dünn schneiden.",
        italian:
          "In padella: 1. Condire con sale e pepe. 2. Rosolare 4 min per lato in padella di ghisa calda. 3. Riposare e affettare sottilmente contro fibra.",
        french:
          "Poêlée: 1. Assaisonner avec sel et poivre. 2. Saisir 4 min de chaque côté dans une poêle chaude. 3. Laisser reposer et trancher finement à contre-fil.",
        spanish:
          "A la sartén: 1. Sazonar con sal y pimienta. 2. Dorar 4 min por lado en sartén de hierro caliente. 3. Reposar y cortar en lonchas finas contra la fibra.",
      },
      {
        english:
          "Stir-fried: 1. Slice thinly across the grain. 2. Cook quickly in a hot wok with vegetables and sauce. 3. Serve immediately over rice or noodles.",
        german:
          "Gebraten (Wok): 1. Dünn quer zur Faser schneiden. 2. Schnell im heißen Wok mit Gemüse und Sauce braten. 3. Sofort mit Reis oder Nudeln servieren.",
        italian:
          "Saltato in padella: 1. Tagliare sottile contro fibra. 2. Cuocere rapidamente in wok caldo con verdure e salsa. 3. Servire subito con riso o noodles.",
        french:
          "Sauté: 1. Trancher finement à contre-fil. 2. Cuire rapidement au wok avec légumes et sauce. 3. Servir aussitôt avec riz ou nouilles.",
        spanish:
          "Salteado: 1. Cortar en tiras finas contra la fibra. 2. Cocinar rápido en wok caliente con verduras y salsa. 3. Servir de inmediato con arroz o fideos.",
      },
    ],
  },
  {
    id: "16",
    name: {
      english: "Short Plate",
      german: "Bauchlappen",
      italian: "Pancia",
      french: "Plat de côtes",
      spanish: "Falda",
    },
    nutrition: {
      kcal: 300,
      protein: 23,
      saturatedFats: 12,
      unsaturatedFats: 13,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Braised: 1. Sear both sides. 2. Simmer in broth for 2–3 hours. 3. Serve with reduced sauce.",
        german:
          "Geschmort: 1. Anbraten. 2. In Brühe 2–3 Std. köcheln. 3. Mit reduzierter Sauce servieren.",
        italian:
          "Brasato: 1. Rosolare. 2. Cuocere in brodo per 2–3 ore. 3. Servire con salsa ridotta.",
        french:
          "Braisé: 1. Saisir. 2. Cuire dans un bouillon 2–3 h. 3. Servir avec sauce réduite.",
        spanish:
          "Estofado: 1. Dorar. 2. Cocer en caldo 2–3 h. 3. Servir con salsa reducida.",
      },
      {
        english:
          "Smoked: 1. Season well. 2. Smoke low and slow for 4–6 hours. 3. Slice thin.",
        german:
          "Geräuchert: 1. Würzen. 2. 4–6 Std. bei niedriger Hitze räuchern. 3. Dünn schneiden.",
        italian:
          "Affumicato: 1. Condire. 2. Affumicare 4–6 ore a bassa temperatura. 3. Affettare sottile.",
        french:
          "Fumé: 1. Assaisonner. 2. Fumer 4–6 h à feu doux. 3. Trancher fin.",
        spanish:
          "Ahumado: 1. Sazonar. 2. Ahumar 4–6 h a baja temperatura. 3. Cortar fino.",
      },
    ],
  },
  {
    id: "17",
    name: {
      english: "Chuck Steak",
      german: "Halssteak",
      italian: "Bistecca di collo",
      french: "Steak de palette",
      spanish: "Bistec de aguja",
    },
    nutrition: {
      kcal: 250,
      protein: 26,
      saturatedFats: 9,
      unsaturatedFats: 10,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Grilled: 1. Marinate for 4–6 hours. 2. Grill 5–6 min per side. 3. Let rest before slicing.",
        german:
          "Gegrillt: 1. 4–6 Std. marinieren. 2. Je 5–6 Min grillen. 3. Ruhen lassen und schneiden.",
        italian:
          "Grigliato: 1. Marinare 4–6 ore. 2. Grigliare 5–6 min per lato. 3. Riposo prima di affettare.",
        french:
          "Grillé: 1. Mariner 4–6 h. 2. Griller 5–6 min par côté. 3. Laisser reposer avant de trancher.",
        spanish:
          "A la parrilla: 1. Marinar 4–6 h. 2. Asar 5–6 min por lado. 3. Reposar antes de cortar.",
      },
      {
        english:
          "Braised: 1. Sear in pan. 2. Add wine and herbs. 3. Simmer for 2 hours until tender.",
        german:
          "Geschmort: 1. Anbraten. 2. Mit Wein und Kräutern ablöschen. 3. 2 Std. schmoren.",
        italian:
          "Brasato: 1. Rosolare. 2. Sfumare con vino e erbe. 3. Cuocere 2 ore.",
        french:
          "Braisé: 1. Saisir. 2. Déglacer au vin et herbes. 3. Cuire 2 h.",
        spanish: "Estofado: 1. Sellar. 2. Añadir vino y hierbas. 3. Cocer 2 h.",
      },
    ],
  },
  {
    id: "18",
    name: {
      english: "Shoulder Blade Steak",
      german: "Schulterblattsteak",
      italian: "Bistecca di spalla",
      french: "Steak de palette",
      spanish: "Bistec de paleta",
    },
    nutrition: {
      kcal: 230,
      protein: 27,
      saturatedFats: 7,
      unsaturatedFats: 8,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Pan-seared: 1. Season with salt and pepper. 2. Sear 4 min per side. 3. Finish with butter.",
        german:
          "Gebraten: 1. Würzen. 2. Je 4 Min anbraten. 3. Mit Butter vollenden.",
        italian:
          "In padella: 1. Condire. 2. 4 min per lato. 3. Concludere con burro.",
        french:
          "Poêlé: 1. Assaisonner. 2. 4 min de chaque côté. 3. Finir au beurre.",
        spanish:
          "A la sartén: 1. Sazonar. 2. 4 min por lado. 3. Terminar con mantequilla.",
      },
      {
        english:
          "Grilled: 1. Marinade 3 hrs. 2. Grill 5 min per side. 3. Slice and serve.",
        german:
          "Gegrillt: 1. 3 Std. marinieren. 2. Je 5 Min grillen. 3. Aufschneiden und servieren.",
        italian:
          "Grigliato: 1. Marinare 3 ore. 2. Grigliare 5 min per lato. 3. Affettare.",
        french:
          "Grillé: 1. Mariner 3 h. 2. Griller 5 min par côté. 3. Trancher.",
        spanish:
          "A la parrilla: 1. Marinar 3 h. 2. Asar 5 min por lado. 3. Cortar y servir.",
      },
    ],
  },
  {
    id: "19",
    name: {
      english: "Shoulder Clod Steak",
      german: "Bugstücksteak",
      italian: "Bistecca di cappello del prete",
      french: "Steak de macreuse",
      spanish: "Bistec de espaldilla",
    },
    nutrition: {
      kcal: 210,
      protein: 28,
      saturatedFats: 6,
      unsaturatedFats: 7,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Stir-fried: 1. Slice thin. 2. Cook quickly in hot wok. 3. Toss with sauce.",
        german:
          "Gebraten (Wok): 1. Dünn schneiden. 2. Schnell braten. 3. Mit Sauce vermengen.",
        italian:
          "Saltato: 1. Tagliare sottile. 2. Cuocere al wok. 3. Condire con salsa.",
        french:
          "Sauté: 1. Trancher fin. 2. Cuire au wok. 3. Mélanger avec sauce.",
        spanish:
          "Salteado: 1. Cortar fino. 2. Cocinar al wok. 3. Mezclar con salsa.",
      },
      {
        english:
          "Braised: 1. Brown on both sides. 2. Simmer in broth 2 hours. 3. Serve hot.",
        german:
          "Geschmort: 1. Anbraten. 2. In Brühe 2 Std. köcheln. 3. Heiß servieren.",
        italian:
          "Brasato: 1. Rosolare. 2. Cuocere in brodo 2 ore. 3. Servire caldo.",
        french: "Braisé: 1. Saisir. 2. Mijoter 2 h. 3. Servir chaud.",
        spanish: "Estofado: 1. Dorar. 2. Cocer 2 h. 3. Servir caliente.",
      },
    ],
  },
  {
    id: "20",
    name: {
      english: "Shoulder Clod (Pot Roast)",
      german: "Schmorstück vom Bug",
      italian: "Arrosto di spalla",
      french: "Épaule en rôti",
      spanish: "Asado de espaldilla",
    },
    nutrition: {
      kcal: 240,
      protein: 26,
      saturatedFats: 8,
      unsaturatedFats: 9,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Pot roast: 1. Sear in large pot. 2. Add vegetables and broth. 3. Simmer covered 3 hours.",
        german:
          "Schmortopf: 1. Anbraten. 2. Gemüse und Brühe dazu. 3. 3 Std. schmoren.",
        italian:
          "Stracotto: 1. Rosolare. 2. Aggiungere verdure e brodo. 3. Cuocere 3 ore coperto.",
        french:
          "Rôti mijoté: 1. Saisir. 2. Ajouter légumes et bouillon. 3. Cuire 3 h à couvert.",
        spanish:
          "Asado a la olla: 1. Dorar. 2. Añadir verduras y caldo. 3. Cocer 3 h tapado.",
      },
      {
        english:
          "Slow cooker: 1. Add meat, broth, and herbs. 2. Cook low for 8 hours. 3. Shred and serve.",
        german:
          "Slow Cooker: 1. Fleisch, Brühe, Kräuter rein. 2. 8 Std. garen. 3. Zerpflücken und servieren.",
        italian:
          "Cottura lenta: 1. Carne, brodo, erbe. 2. 8 ore a bassa temperatura. 3. Sfilacciare e servire.",
        french:
          "Cuisson lente: 1. Viande, bouillon, herbes. 2. Cuire 8 h à basse température. 3. Effilocher.",
        spanish:
          "Cocción lenta: 1. Carne, caldo, hierbas. 2. Cocinar 8 h a baja. 3. Desmenuzar.",
      },
    ],
  },
  {
    id: "21",
    name: {
      english: "Chuck Roast",
      german: "Bugbraten",
      italian: "Arrosto di collo",
      french: "Rôti de palette",
      spanish: "Asado de aguja",
    },
    nutrition: {
      kcal: 260,
      protein: 24,
      saturatedFats: 10,
      unsaturatedFats: 10,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Oven roasted: 1. Rub with spices. 2. Roast at 160°C for 3 hours. 3. Let rest before slicing.",
        german:
          "Im Ofen: 1. Würzen. 2. Bei 160 °C 3 Std. braten. 3. Ruhen lassen und schneiden.",
        italian:
          "Arrosto: 1. Condire. 2. Cuocere 3 ore a 160 °C. 3. Riposare e affettare.",
        french:
          "Au four: 1. Assaisonner. 2. Cuire 3 h à 160 °C. 3. Repos puis trancher.",
        spanish:
          "Al horno: 1. Sazonar. 2. Asar 3 h a 160 °C. 3. Reposar y cortar.",
      },
      {
        english:
          "Dutch oven: 1. Sear and add stock. 2. Cover and braise 2.5 hours. 3. Serve with sauce.",
        german:
          "Schmortopf: 1. Anbraten, Brühe dazu. 2. 2,5 Std. schmoren. 3. Mit Sauce servieren.",
        italian:
          "Pentola: 1. Rosolare, aggiungere brodo. 2. Brasare 2,5 ore. 3. Servire con salsa.",
        french:
          "Cocotte: 1. Saisir, ajouter bouillon. 2. Mijoter 2,5 h. 3. Servir avec sauce.",
        spanish:
          "Cazuela: 1. Sellar, añadir caldo. 2. Guisar 2,5 h. 3. Servir con salsa.",
      },
    ],
  },
  {
    id: "22",
    name: {
      english: "Oxtail",
      german: "Ochsenschwanz",
      italian: "Coda di bue",
      french: "Queue de bœuf",
      spanish: "Rabo de toro",
    },
    nutrition: {
      kcal: 262,
      protein: 30.9,
      saturatedFats: 6.5,
      unsaturatedFats: 7.8,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Braised: 1. Season with salt and pepper. 2. Sear in a hot pan. 3. Add vegetables and broth, then braise at 160°C (320°F) for 3–4 hours until tender.",
        german:
          "Geschmort: 1. Mit Salz und Pfeffer würzen. 2. In heißer Pfanne anbraten. 3. Gemüse und Brühe hinzufügen, dann bei 160°C 3–4 Stunden schmoren.",
        italian:
          "Brasato: 1. Condire con sale e pepe. 2. Rosolare in padella calda. 3. Aggiungere verdure e brodo, quindi brasare a 160°C per 3–4 ore.",
        french:
          "Braisé: 1. Assaisonner de sel et de poivre. 2. Saisir dans une poêle chaude. 3. Ajouter des légumes et du bouillon, puis braiser à 160°C pendant 3–4 heures.",
        spanish:
          "Estofado: 1. Sazonar con sal y pimienta. 2. Dorar en sartén caliente. 3. Agregar verduras y caldo, luego estofar a 160°C durante 3–4 horas.",
      },
    ],
  },
  {
    id: "23",
    name: {
      english: "Shank",
      german: "Beinscheibe",
      italian: "Stinco",
      french: "Jarret",
      spanish: "Jarrete",
    },
    nutrition: {
      kcal: 128,
      protein: 21.8,
      saturatedFats: 1.5,
      unsaturatedFats: 2.4,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Slow-cooked: 1. Season and sear the shank. 2. Add aromatic vegetables and broth. 3. Simmer at low heat for 3–4 hours until meat is tender.",
        german:
          "Langsam gegart: 1. Beinscheibe würzen und anbraten. 2. Aromatisches Gemüse und Brühe hinzufügen. 3. Bei niedriger Hitze 3–4 Stunden köcheln lassen.",
        italian:
          "Cottura lenta: 1. Condire e rosolare lo stinco. 2. Aggiungere verdure aromatiche e brodo. 3. Cuocere a fuoco basso per 3–4 ore fino a quando la carne è tenera.",
        french:
          "Cuisson lente: 1. Assaisonner et saisir le jarret. 2. Ajouter des légumes aromatiques et du bouillon. 3. Mijoter à feu doux pendant 3–4 heures jusqu'à tendreté.",
        spanish:
          "Cocción lenta: 1. Sazonar y dorar el jarrete. 2. Agregar verduras aromáticas y caldo. 3. Cocinar a fuego lento durante 3–4 horas hasta que la carne esté tierna.",
      },
    ],
  },
  {
    id: "24",
    name: {
      english: "Flank Steak",
      german: "Bauchlappen",
      italian: "Fianchetto",
      french: "Bavette",
      spanish: "Falda",
    },
    nutrition: {
      kcal: 192,
      protein: 28,
      saturatedFats: 3,
      unsaturatedFats: 5,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Grilled: 1. Marinate for at least 2 hours. 2. Grill over high heat for 4–5 minutes per side. 3. Rest for 5 minutes, then slice thinly against the grain.",
        german:
          "Gegrillt: 1. Mindestens 2 Stunden marinieren. 2. Bei hoher Hitze 4–5 Minuten pro Seite grillen. 3. 5 Minuten ruhen lassen, dann dünn gegen die Faser schneiden.",
        italian:
          "Grigliato: 1. Marinare per almeno 2 ore. 2. Grigliare a fuoco alto per 4–5 minuti per lato. 3. Riposare 5 minuti, quindi affettare sottilmente contro fibra.",
        french:
          "Grillé: 1. Mariner pendant au moins 2 heures. 2. Griller à feu vif 4–5 minutes de chaque côté. 3. Laisser reposer 5 minutes, puis trancher finement contre le grain.",
        spanish:
          "A la parrilla: 1. Marinar durante al menos 2 horas. 2. Asar a fuego alto 4–5 minutos por lado. 3. Reposar 5 minutos, luego cortar en finas rebanadas contra la fibra.",
      },
    ],
  },
  {
    id: "25",
    name: {
      english: "Brisket",
      german: "Bruststück",
      italian: "Petto",
      french: "Poitrine",
      spanish: "Pecho",
    },
    nutrition: {
      kcal: 280,
      protein: 29,
      saturatedFats: 7,
      unsaturatedFats: 10,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Smoked: 1. Season with a dry rub. 2. Smoke at 110°C (225°F) for 10–12 hours until internal temperature reaches 90°C (195°F). 3. Rest for 1 hour before slicing.",
        german:
          "Geräuchert: 1. Mit Trockenrub würzen. 2. Bei 110°C 10–12 Stunden räuchern, bis die Kerntemperatur 90°C erreicht. 3. 1 Stunde ruhen lassen, dann aufschneiden.",
        italian:
          "Affumicato: 1. Condire con una miscela secca. 2. Affumicare a 110°C per 10–12 ore fino a raggiungere i 90°C interni. 3. Riposare 1 ora prima di affettare.",
        french:
          "Fumé: 1. Assaisonner avec un mélange sec. 2. Fumer à 110°C pendant 10–12 heures jusqu'à 90°C à cœur. 3. Laisser reposer 1 heure avant de trancher.",
        spanish:
          "Ahumado: 1. Sazonar con mezcla seca. 2. Ahumar a 110°C durante 10–12 horas hasta alcanzar 90°C internos. 3. Reposar 1 hora antes de cortar.",
      },
    ],
  },
  {
    id: "26",
    name: {
      english: "Brisket Point",
      german: "Brustspitze",
      italian: "Punta di petto",
      french: "Pointe de poitrine",
      spanish: "Punta de pecho",
    },
    nutrition: {
      kcal: 304,
      protein: 36.5,
      saturatedFats: 12,
      unsaturatedFats: 20,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Braised: 1. Season and sear the brisket point. 2. Add broth and vegetables. 3. Braise at 160°C (320°F) for 3–4 hours until tender.",
        german:
          "Geschmort: 1. Brustspitze würzen und anbraten. 2. Brühe und Gemüse hinzufügen. 3. Bei 160°C 3–4 Stunden schmoren.",
        italian:
          "Brasato: 1. Condire e rosolare la punta di petto. 2. Aggiungere brodo e verdure. 3. Brasare a 160°C per 3–4 ore.",
        french:
          "Braisé: 1. Assaisonner et saisir la pointe de poitrine. 2. Ajouter du bouillon et des légumes. 3. Braiser à 160°C pendant 3–4 heures.",
        spanish:
          "Estofado: 1. Sazonar y dorar la punta de pecho. 2. Agregar caldo y verduras. 3. Estofar a 160°C durante 3–4 horas.",
      },
    ],
  },
  {
    id: "27",
    name: {
      english: "Neck",
      german: "Hals",
      italian: "Collo",
      french: "Cou",
      spanish: "Cuello",
    },
    nutrition: {
      kcal: 299,
      protein: 29.9,
      saturatedFats: 8,
      unsaturatedFats: 11,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Stewed: 1. Cut into chunks and season. 2. Brown in a pot. 3. Add liquid and simmer for 2–3 hours until meat is tender.",
        german:
          "Geschmort: 1. In Stücke schneiden und würzen. 2. In einem Topf anbraten. 3. Flüssigkeit hinzufügen und 2–3 Stunden köcheln lassen.",
        italian:
          "Stufato: 1. Tagliare a pezzi e condire. 2. Rosolare in pentola. 3. Aggiungere liquido e cuocere a fuoco lento per 2–3 ore.",
        french:
          "Ragoût: 1. Couper en morceaux et assaisonner. 2. Faire revenir dans une cocotte. 3. Ajouter du liquide et mijoter 2–3 heures.",
        spanish:
          "Estofado: 1. Cortar en trozos y sazonar. 2. Dorar en una olla. 3. Agregar líquido y cocinar a fuego lento durante 2–3 horas.",
      },
    ],
  },
  {
    id: "28",
    name: {
      english: "Cheek",
      german: "Backe",
      italian: "Guancia",
      french: "Joue",
      spanish: "Carrillera",
    },
    nutrition: {
      kcal: 230,
      protein: 26.5,
      saturatedFats: 6,
      unsaturatedFats: 8.5,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Slow-braised: 1. Season and sear beef cheeks. 2. Add red wine and vegetables. 3. Braise at 150°C (300°F) for 3–4 hours.",
        german:
          "Langsam geschmort: 1. Backen würzen und anbraten. 2. Rotwein und Gemüse hinzufügen. 3. Bei 150°C 3–4 Stunden schmoren.",
        italian:
          "Brasate lentamente: 1. Condire e rosolare le guance. 2. Aggiungere vino rosso e verdure. 3. Brasare a 150°C per 3–4 ore.",
        french:
          "Braisée doucement: 1. Assaisonner et saisir les joues. 2. Ajouter vin rouge et légumes. 3. Braiser à 150°C pendant 3–4 heures.",
        spanish:
          "Estofado lento: 1. Sazonar y dorar las carrilleras. 2. Agregar vino tinto y verduras. 3. Estofar a 150°C durante 3–4 horas.",
      },
    ],
  },
  {
    id: "29",
    name: {
      english: "Tongue",
      german: "Zunge",
      italian: "Lingua",
      french: "Langue",
      spanish: "Lengua",
    },
    nutrition: {
      kcal: 284,
      protein: 16.4,
      saturatedFats: 8.7,
      unsaturatedFats: 13.6,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Boiled: 1. Simmer whole tongue in salted water with aromatics for 2.5–3 hours. 2. Peel skin while warm. 3. Slice and serve hot or cold.",
        german:
          "Gekocht: 1. Ganze Zunge in Salzwasser mit Gewürzen 2,5–3 Stunden köcheln. 2. Haut warm abziehen. 3. In Scheiben servieren.",
        italian:
          "Bollita: 1. Cuocere la lingua intera in acqua salata con aromi per 2,5–3 ore. 2. Pelare da calda. 3. Affettare e servire.",
        french:
          "Bouillie: 1. Cuire la langue entière dans l’eau salée avec aromates pendant 2,5–3 h. 2. Retirer la peau tiède. 3. Trancher et servir.",
        spanish:
          "Hervida: 1. Cocer la lengua entera en agua salada con aromáticos por 2.5–3 horas. 2. Pelar caliente. 3. Cortar en rebanadas.",
      },
    ],
  },
];
