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
  dutch: string;
  portuguese: string;
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
      dutch: "Korte rib/Klapstuk",
      portuguese: "Costela curta",
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
        dutch:
          "Stoofpotten: 1. Schroei beide zijden 3–4 minuten per kant in een pan. 2. Plaats de ribben met kruiden in een pan of braadpan. 3. Kook langzaam en op lage temperatuur: Tijd: 2–3 uur of langer. Doel interne temperatuur: 90–96°C.",
        portuguese:
          "Ensopados: 1. Sele os dois lados por 3–4 minutos de cada lado em uma frigideira. 2. Coloque as costelas com aromáticos em uma panela ou caçarola. 3. Cozinhe lentamente: Tempo: 2–3 horas ou mais. Temperatura interna alvo: 90–96°C.",
      },
      {
        english:
          "Frying Pan: 1. Preheat pan with oil. 2. Sear 2–4 minutes per side. 3. Rest for 3–5 minutes. ",
        german:
          "Pfanne: 1. Pfanne mit Öl vorheizen. 2. 2–4 Minuten pro Seite anbraten. 3. 3–5 Minuten ruhen lassen.",
        italian:
          "Padella: 1. Preriscaldare la padella con olio. 2. Rosolare 2–4 minuti per lato. 3. Riposare per 3–5 minuti. ",
        french:
          "Poêle : 1. Préchauffer la poêle avec de l'huile. 2. Saisir 2–4 minutes de chaque côté. 3. Laisser reposer 3–5 minutes. ",
        spanish:
          "Sartén: 1. Precalentar la sartén con aceite. 2. Sellar 2–4 minutos por lado. 3. Reposar 3–5 minutos. ",
        dutch:
          "Koekenpan: 1. Verhit de pan met olie. 2. Schroei 2–4 minuten per kant. 3. Laat 3–5 minuten rusten. ",
        portuguese:
          "Frigideira: 1. Pré-aqueça a frigideira com óleo. 2. Sele por 2–4 minutos de cada lado. 3. Deixe descansar por 3–5 minutos. ",
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
        dutch:
          "Grill: 1. Verwarm de grill voor op middelhoog vuur. 2. Kruid en plaats de ribben boven indirect vuur. 3. Grill 20–30 minuten, af en toe draaien. 4. Voor een geroosterd resultaat, kort boven direct vuur grillen. Doeltemperatuur: 90–96°C.",
        portuguese:
          "Grelha: 1. Pré-aqueça a grelha em fogo médio-alto. 2. Tempere e coloque as costelas sobre o calor indireto. 3. Grelhe por 20–30 minutos, virando ocasionalmente. 4. Para um acabamento tostado, sele rapidamente em fogo direto. Temperatura interna alvo: 90–96°C.",
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
      portuguese: "miolo do contrafilé",
      dutch: "Ribeye",
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
          "Grilling: 1. Preheat grill to high. 2. Sear 2-3 min per side. 3. Lower heat and cook to desired doneness.",
        german:
          "Grillen: 1. Grill auf hohe Hitze vorheizen. 2. 2–3 Min. pro Seite scharf anbraten. 3. Hitze reduzieren und bis zur gewünschten Garstufe weitergaren.",
        italian:
          "Griglia: 1. Preriscalda la griglia a fuoco alto. 2. Rosola 2–3 min per lato. 3. Abbassa il calore e cuoci al punto desiderato.",
        french:
          "Grillade : 1. Préchauffez le gril à feu vif. 2. Saisir 2–3 min de chaque côté. 3. Réduire le feu et cuire selon la cuisson désirée.",
        spanish:
          "A la parrilla: 1. Precalienta la parrilla a fuego alto. 2. Marca 2–3 min por lado. 3. Baja el fuego y cocina al punto deseado.",
        dutch:
          "Grillen: 1. Verhit de grill op hoge stand. 2. Schroei 2–3 minuten per kant dicht. 3. Verlaag de hitte en gaar tot de gewenste kerntemperatuur.",
        portuguese:
          "Grelhar: 1. Pré-aqueça a grelha em fogo alto. 2. Sele por 2–3 minutos de cada lado. 3. Reduza o fogo e cozinhe até o ponto desejado.",
      },
      {
        english:
          "Frying pan: 1. Preheat pan with oil. 2. Sear 2–4 minutes per side. 3. Rest 3–5 minutes.",
        german:
          "Pfanne: 1. Pfanne mit Öl erhitzen. 2. 2–4 Minuten pro Seite anbraten. 3. 3–5 Minuten ruhen lassen.",
        italian:
          "Padella: 1. Scalda la padella con olio. 2. Cuoci 2–4 minuti per lato. 3. Lascia riposare 3–5 minuti.",
        french:
          "Poêle : 1. Chauffer la poêle avec un peu d’huile. 2. Saisir 2–4 min de chaque côté. 3. Laisser reposer 3–5 min.",
        spanish:
          "Sartén: 1. Calienta la sartén con aceite. 2. Cocina 2–4 min por lado. 3. Reposa 3–5 min.",
        dutch:
          "Pan: 1. Verhit een pan met olie. 2. Bak 2–4 minuten per kant. 3. Laat 3–5 minuten rusten.",
        portuguese:
          "Frigideira: 1. Aqueça a frigideira com óleo. 2. Sele por 2–4 minutos de cada lado. 3. Deixe descansar por 3–5 minutos.",
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
        dutch:
          "Oven: 1. Bak het vlees 2–3 minuten per kant in een pan. 2. Zet in een oven van 180°C. 3. Controleer de kerntemperatuur voor de gewenste gaarheid.",
        portuguese:
          "Forno: 1. Sele o bife em uma frigideira por 2–3 minutos de cada lado. 2. Transfira para forno a 180°C. 3. Use um termômetro para garantir o ponto desejado.",
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
        dutch:
          "Gerookt: Kruid met zout en peper, rook bij 95–110°C tot een kerntemperatuur van 54–57°C (medium-rare) is bereikt. Laat rusten en snijd dun voor broodjes of salades.",
        portuguese:
          "Defumado: Tempere com sal e pimenta, defume a 95–110°C até atingir 54–57°C internamente (ao ponto para mal passado). Deixe descansar antes de fatiar finamente.",
      },
    ],
  },
  {
    id: "3",
    name: {
      english: "Short Sirloin",
      german: "Hüftsteak",
      italian: "Scamone",
      french: "Rumsteck",
      spanish: "Solomillo corto",
      dutch: "Kogelbiefstuk",
      portuguese: "Alcatra Curta",
    },
    nutrition: {
      kcal: 190,
      protein: 27,
      saturatedFats: 4,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Grilled: 1. Preheat grill to high. 2. Season steak with salt and pepper. 3. Grill for 2–3 minutes per side. 4. Rest before serving.",
        german:
          "Gegrillt: 1. Grill stark vorheizen. 2. Steak salzen und pfeffern. 3. 2–3 Minuten pro Seite grillen. 4. Ruhen lassen.",
        italian:
          "Grigliato: 1. Scaldare bene la griglia. 2. Condire con sale e pepe. 3. Grigliare 2–3 min per lato. 4. Riposo.",
        french:
          "Grillé : 1. Préchauffer le grill. 2. Assaisonner. 3. Griller 2–3 min par face. 4. Laisser reposer.",
        spanish:
          "A la parrilla: 1. Precalentar la parrilla. 2. Sazonar. 3. Asar 2–3 min por lado. 4. Reposar.",
        dutch:
          "Gegrild: 1. Grill goed voorverwarmen. 2. Kruid met zout en peper. 3. Grill 2–3 minuten per kant. 4. Laat rusten.",
        portuguese:
          "Grelhado: 1. Pré-aqueça bem a grelha. 2. Tempere com sal e pimenta. 3. Grelhe por 2–3 min de cada lado. 4. Deixe repousar.",
      },
      {
        english:
          "Pan-seared: 1. Heat a skillet over high heat. 2. Sear steak 2–3 minutes per side. 3. Rest before slicing.",
        german:
          "Gebraten: 1. Pfanne stark erhitzen. 2. Steak 2–3 Minuten pro Seite braten. 3. Ruhen lassen.",
        italian:
          "In padella: 1. Scaldare una padella. 2. Cuocere 2–3 min per lato. 3. Riposare prima di tagliare.",
        french:
          "À la poêle : 1. Chauffer la poêle. 2. Cuire 2–3 min par face. 3. Laisser reposer avant de trancher.",
        spanish:
          "A la sartén: 1. Calentar bien la sartén. 2. Cocinar 2–3 min por lado. 3. Reposar antes de cortar.",
        dutch:
          "Bakken: 1. Verhit een koekenpan op hoog vuur. 2. Bak 2–3 minuten per kant. 3. Laat rusten voor het snijden.",
        portuguese:
          "Frito na frigideira: 1. Aqueça bem a frigideira. 2. Sele 2–3 min por lado. 3. Deixe repousar antes de fatiar.",
      },
      {
        english:
          "Raw or Smoked: 1. Use high-quality beef. 2. Slice thinly for carpaccio or dice for tartare. 3. Optionally cold-smoke and serve like bresaola with olive oil and arugula.",
        german:
          "Roh oder geräuchert: 1. Hochwertiges Rindfleisch verwenden. 2. Dünn schneiden (Carpaccio) oder fein würfeln (Tatar). 3. Optional kalt räuchern und wie Bresaola servieren mit Olivenöl und Rucola.",
        italian:
          "Crudo o affumicato: 1. Usare carne di alta qualità. 2. Affettare per carpaccio o tagliare a dadini per tartare. 3. Affumicare a freddo come la bresaola, servire con olio e rucola.",
        french:
          "Cru ou fumé : 1. Utiliser de la viande de qualité. 2. Trancher fin pour carpaccio ou hacher pour tartare. 3. Fumer à froid et servir comme bresaola avec huile d’olive et roquette.",
        spanish:
          "Crudo o ahumado: 1. Usar carne de alta calidad. 2. Cortar fino para carpaccio o en dados para tartar. 3. Se puede ahumar en frío y servir como bresaola con aceite y rúcula.",
        dutch:
          "Rauw of gerookt: 1. Gebruik rundvlees van hoge kwaliteit. 2. Snijd dun voor carpaccio of hak fijn voor tartaar. 3. Optioneel koud roken en serveren als bresaola met olijfolie en rucola.",
        portuguese:
          "Cru ou defumado: 1. Use carne de alta qualidade. 2. Corte fino para carpaccio ou pique para tartare. 3. Pode ser defumado a frio e servido como bresaola com azeite e rúcula.",
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
      dutch: "Ossenhaas",
      portuguese: "Filé Mignon",
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
          "Frying Pan: 1. Sear 2–3 min per side in very hot pan. 2. Baste with butter and herbs. 3. Rest 5 minutes.",
        german:
          "Pfanne: 1. 2–3 Min. pro Seite bei hoher Hitze anbraten. 2. Mit Butter und Kräutern begießen. 3. 5 Min. ruhen lassen.",
        italian:
          "Padella: 1. 2–3 min per lato in padella molto calda. 2. Irrorare con burro ed erbe. 3. Riposare 5 min.",
        french:
          "Poêle : 1. 2–3 min par côté à feu vif. 2. Arroser de beurre et herbes. 3. Repos 5 min.",
        spanish:
          "Sartén: 1. Sellar 2–3 min por lado a fuego alto. 2. Regar con mantequilla y hierbas. 3. Reposar 5 min. ",
        dutch:
          "Koekenpan: 1. Schroei 2–3 min per kant in een zeer hete pan. 2. Bedruip met boter en kruiden. 3. Laat 5 min rusten. ",
        portuguese:
          "Frigideira: 1. Sele por 2–3 min de cada lado em panela bem quente. 2. Regue com manteiga e ervas. 3. Deixe descansar 5 min. ",
      },
      {
        english:
          "Grill: 1. Preheat grill high. 2. Grill 2–3 min per side. 3. Baste with butter. 4. Let rest",
        german:
          "Grill: 1. Grill stark vorheizen. 2. 2–3 Min. pro Seite grillen. 3. Mit Butter bestreichen. 4. Ruhen lassen. Garstufen wie oben.",
        italian:
          "Griglia: 1. Griglia molto calda. 2. 2–3 min per lato. 3. Condire con burro. 4. Riposo. Cottura: come sopra.",
        french:
          "Grill : 1. Préchauffer fortement. 2. Griller 2–3 min par face. 3. Beurrer légèrement. 4. Repos. Cuisson : comme ci-dessus.",
        spanish:
          "Parrilla: 1. Precalentar fuerte. 2. 2–3 min por lado. 3. Untar con mantequilla. 4. Reposar. Cocción: como arriba.",
        dutch:
          "Grill: 1. Grill goed voorverwarmen. 2. Grill 2–3 min per kant. 3. Bestrijk met boter. 4. Laat rusten. Gaarheid: zoals hierboven.",
        portuguese:
          "Grelha: 1. Pré-aqueça bem. 2. Grelhe por 2–3 min de cada lado. 3. Pincele com manteiga. 4. Deixe descansar. Pontos de cozimento: igual ao método da frigideira.",
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
        dutch:
          "Rauw of gerookt: Dun gesneden als carpaccio of tartaar. Kan koud worden gerookt zoals bresaola. Heerlijk op brood met olijfolie en rucola.",
        portuguese:
          "Cru ou defumado: Corte fino para carpaccio ou tartar de filé. Pode ser defumado a frio como bresaola. Ideal no pão com azeite e rúcula.",
      },
    ],
  },
  {
    id: "5",
    name: {
      english: "Rump Steak",
      german: "Rumpsteak",
      italian: "Fesa",
      french: "Rumsteck",
      spanish: "Bistec de cadera",
      dutch: "Runderbil",
      portuguese: "Alcatra",
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
          "Pan-frying: Season with salt and pepper. Sear in a hot pan for 2–3 minutes per side. Rest for 5 minutes before serving.",
        german:
          "Braten: Mit Salz und Pfeffer würzen. In heißer Pfanne 2–3 Minuten pro Seite braten. Vor dem Servieren 5 Minuten ruhen lassen.",
        italian:
          "In padella: Condire con sale e pepe. Cuocere 2–3 min per lato. Riposare 5 minuti.",
        french:
          "À la poêle: Assaisonner. Cuire à feu vif 2–3 min par côté. Laisser reposer 5 min.",
        spanish:
          "A la sartén: Sazonar. Cocinar 2–3 min por lado. Reposar 5 minutos.",
        dutch:
          "Bakken: Kruid met zout en peper. Bak 2–3 minuten per kant in een hete pan. Laat 5 minuten rusten.",
        portuguese:
          "Fritar: Temperar com sal e pimenta. Selar 2–3 minutos de cada lado. Deixar repousar 5 minutos.",
      },
      {
        english:
          "Grilling: Preheat grill to high. Grill steak for 3–4 minutes per side. Let rest before slicing.",
        german:
          "Grillen: Grill auf hohe Hitze vorheizen. Steak 3–4 Minuten pro Seite grillen. Ruhen lassen.",
        italian:
          "Grigliare: Riscaldare la griglia. Cuocere 3–4 min per lato. Far riposare prima di tagliare.",
        french:
          "Grillé: Préchauffer le gril. Griller 3–4 min par côté. Laisser reposer.",
        spanish:
          "A la parrilla: Precalentar. Asar 3–4 min por lado. Dejar reposar antes de cortar.",
        dutch:
          "Grillen: Verwarm de grill voor op hoge temperatuur. Grill 3–4 minuten per kant. Laat rusten.",
        portuguese:
          "Grelhar: Pré-aquecer a grelha. Grelhar 3–4 minutos de cada lado. Deixar repousar.",
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
      dutch: "Sukadelappen",
      portuguese: "Acém",
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
        dutch:
          "Stoofpot: 1. In blokjes of plakken snijden. 2. Aanzetten in olie. 3. Voeg kruiden en vocht toe. 4. Laat 2,5–3 uur sudderen tot mals. Doeltemperatuur: 90–96 °C.",
        portuguese:
          "Ensopados: 1. Cortar em cubos ou fatias. 2. Dourar no óleo. 3. Adicionar aromáticos e líquido. 4. Cozinhar por 2,5–3 horas até ficar macio. Temperatura ideal: 90–96°C.",
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
        dutch:
          "Ovenbraden: 1. Oven voorverwarmen op 150 °C. 2. Rund aanbraden. 3. In braadslee met bouillon en kruiden leggen. 4. Afgedekt 3–4 uur braden tot mals.",
        portuguese:
          "Assado no forno: 1. Pré-aquecer o forno a 150°C. 2. Selar a carne. 3. Colocar com caldo e temperos em assadeira. 4. Assar coberto por 3–4 horas até ficar macio.",
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
        dutch:
          "Gegrild (dunne steaks): 1. In plakken van 1,5–2 cm snijden. 2. 4–6 uur marineren. 3. Grill 2–3 min per kant op hoge hitte. Kerntemperatuur: 55–63 °C.",
        portuguese:
          "Grelhado (bifes finos): 1. Cortar em fatias de 1,5–2 cm. 2. Marinar por 4–6 horas. 3. Grelhar 2–3 min de cada lado. Temp. interna: 55–63°C.",
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
        dutch:
          "Gerookt (sukade): 1. Wrijf in met dry rub. 2. Rook op 110–120 °C voor 5–6 uur. 3. Wikkel in folie zodra er een korst ontstaat. 4. Ga door tot kerntemperatuur 90–95 °C.",
        portuguese:
          "Defumado: 1. Aplicar dry rub. 2. Defumar a 110–120°C por 5–6 horas. 3. Envolver em papel alumínio após formar crosta. 4. Continuar até 90–95°C de temperatura interna.",
      },
    ],
  },
  {
    id: "7",
    name: {
      english: "Sirloin Tip (Knuckle Cap)",
      german: "Oberschale Spitze",
      italian: "Punta di sottofesa",
      french: "Tende de tranche poir",
      spanish: "Punta de contra",
      dutch: "Dikke lende punt",
      portuguese: "Ponta da alcatra",
    },
    nutrition: {
      kcal: 165,
      protein: 30,
      saturatedFats: 2,
      unsaturatedFats: 3,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Roasted: 1. Season with rosemary and garlic. 2. Roast at 180°C for 50–60 minutes. 3. Slice thin against the grain.",
        german:
          "Gebraten: 1. Mit Rosmarin und Knoblauch würzen. 2. Bei 180°C für 50–60 Min. braten. 3. Dünn gegen die Faser schneiden.",
        italian:
          "Arrosto: 1. Condire con rosmarino e aglio. 2. Cuocere a 180°C per 50–60 minuti. 3. Affettare contro fibra.",
        french:
          "Rôti: 1. Assaisonner avec romarin et ail. 2. Rôtir à 180°C pendant 50–60 min. 3. Trancher à contre-fibre.",
        spanish:
          "Asado: 1. Sazonar con romero y ajo. 2. Asar a 180°C durante 50–60 min. 3. Cortar en contra de la fibra.",
        dutch:
          "Geroosterd: 1. Kruid met rozemarijn en knoflook. 2. Braad 50–60 min op 180°C. 3. Dun snijden tegen de draad in.",
        portuguese:
          "Assado: 1. Temperar com alecrim e alho. 2. Assar a 180°C por 50–60 minutos. 3. Cortar contra as fibras.",
      },
      {
        english:
          "Sous-vide: 1. Season and seal. 2. Cook at 56°C for 2.5 hours. 3. Sear quickly before serving.",
        german:
          "Sous-vide: 1. Würzen und vakuumieren. 2. 2,5 Std. bei 56°C garen. 3. Kurz anbraten.",
        italian:
          "Sous-vide: 1. Condire e sigillare. 2. Cuocere a 56°C per 2,5 ore. 3. Rosolare prima di servire.",
        french:
          "Sous-vide: 1. Assaisonner et sceller. 2. Cuire à 56°C pendant 2,5 h. 3. Saisir avant de servir.",
        spanish:
          "Sous-vide: 1. Sazonar y sellar. 2. Cocer a 56°C por 2,5 h. 3. Dorar antes de servir.",
        dutch:
          "Sous-vide: 1. Kruid en vacumeer. 2. Gaar 2,5 uur op 56°C. 3. Kort aanbraden.",
        portuguese:
          "Sous-vide: 1. Temperar e selar. 2. Cozinhar a 56°C por 2,5 h. 3. Selar antes de servir.",
      },
      {
        english:
          "Stir-fried: 1. Slice thinly. 2. Flash-fry with soy sauce and green onions. 3. Serve hot.",
        german:
          "Pfannengerührt: 1. Dünn schneiden. 2. Kurz mit Sojasauce und Frühlingszwiebeln braten. 3. Heiß servieren.",
        italian:
          "Saltato: 1. Tagliare sottile. 2. Saltare con salsa di soia e cipollotti. 3. Servire caldo.",
        french:
          "Sauté: 1. Trancher finement. 2. Faire sauter avec sauce soja et oignons verts. 3. Servir chaud.",
        spanish:
          "Salteado: 1. Cortar fino. 2. Saltear con soja y cebolletas. 3. Servir caliente.",
        dutch:
          "Roerbak: 1. Dun snijden. 2. Kort bakken met sojasaus en bosui. 3. Warm serveren.",
        portuguese:
          "Salteado: 1. Cortar em tiras finas. 2. Saltear com soja e cebolinha. 3. Servir quente.",
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
      dutch: "Borststuk",
      portuguese: "Peito inferior",
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
        dutch:
          "Gestoofd: 1. Schroei beide kanten 4 min aan. 2. Blus af met bouillon/wijn. 3. Voeg kruiden toe. 4. Dek af en gaar 3–4 uur op laag vuur. Kerntemperatuur: 90–96 °C.",
        portuguese:
          "Braseado: 1. Selar ambos os lados por 4 min. 2. Deglacear com caldo/vinho. 3. Adicionar aromáticos. 4. Cozinhar tampado por 3–4 h em fogo baixo. Temp. interna: 90–96 °C.",
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
        dutch:
          "Gegrild: 1. Marineer 6–8 uur. 2. Grill 3–5 min per kant op middelhoog vuur. 3. Laat 5 min rusten. Snijd dun tegen de draad in.",
        portuguese:
          "Grelhado: 1. Marinar por 6–8 horas. 2. Grelhar por 3–5 min de cada lado em fogo médio. 3. Descansar 5 min. Cortar em fatias finas contra as fibras.",
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
        dutch:
          "Gerookt: 1. Royaal kruidenrub aanbrengen. 2. Rook op 110–120 °C gedurende 4–6 uur. 3. Inpakken in folie en laten rusten. Kerntemperatuur: 90–95 °C.",
        portuguese:
          "Defumado: 1. Aplicar rub generosamente. 2. Defumar a 110–120 °C por 4–6 horas. 3. Envolver em papel alumínio e deixar descansar. Temp. interna: 90–95 °C.",
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
      dutch: "Spinnenbiefstuk",
      portuguese: "Bife da aranha",
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
        dutch:
          "Gegrild: 1. Laat op kamertemperatuur komen. 2. Kruid met zout en peper. 3. Grill 2–3 min per kant op hoog vuur. 4. Laat 5 min rusten. Serveer medium-rare tot medium.",
        portuguese:
          "Grelhado: 1. Deixe atingir a temperatura ambiente. 2. Tempere com sal e pimenta. 3. Grelhe por 2–3 min de cada lado em fogo alto. 4. Descanse por 5 min. Sirva ao ponto para malpassado.",
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
        dutch:
          "In de pan: 1. Verhit de pan op hoog vuur. 2. Kruid het vlees, voeg olie toe. 3. Schroei 2–3 min per kant. 4. Laat rusten en snijd dwars op de draad.",
        portuguese:
          "Selado na frigideira: 1. Aqueça a frigideira em fogo alto. 2. Tempere o bife e adicione óleo. 3. Sele por 2–3 min de cada lado. 4. Deixe descansar e corte contra as fibras.",
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
        dutch:
          "Sous-vide: 1. Vacumeer en gaar op 54 °C gedurende 1,5 uur. 2. Kort aanbraden op hoog vuur. 3. Kort laten rusten en in plakken snijden.",
        portuguese:
          "Sous-vide: 1. Selar a vácuo e cozinhar a 54 °C por 1,5 horas. 2. Finalizar selando rapidamente em fogo alto. 3. Descansar brevemente e fatiar.",
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
      dutch: "Dikke Vinklap",
      portuguese: "Fraldinha grossa",
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
        dutch:
          "Gegrild: 1. Marineer 4–6 uur. 2. Grill 3–4 min per kant op hoog vuur. 3. Laat 5 min rusten. Snijd dun tegen de draad in.",
        portuguese:
          "Grelhado: 1. Marinar por 4–6 horas. 2. Grelhar em fogo alto por 3–4 min de cada lado. 3. Deixar descansar 5 min. Fatiar fino contra as fibras.",
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
        dutch:
          "Roerbak: 1. Snijd dun tegen de draad in. 2. Kort marineren. 3. Roerbak 1–2 min in hete wok met olie tot bruin.",
        portuguese:
          "Salteado: 1. Cortar fino contra as fibras. 2. Marinar brevemente. 3. Saltear em wok quente com óleo por 1–2 min até dourar.",
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
        dutch:
          "In de pan: 1. Dep droog en breng op smaak. 2. Bak 3–4 min per kant in hete pan. 3. Laat 5 min rusten. Snijd dun tegen de draad in.",
        portuguese:
          "Selado na frigideira: 1. Secar e temperar. 2. Selar por 3–4 min de cada lado em frigideira quente. 3. Deixar descansar por 5 min. Fatiar fino contra as fibras.",
      },
    ],
  },
  {
    id: "11",
    name: {
      english: "Flap Steak",
      german: "Bauchlappen",
      italian: "Taglio reale della pancia",
      french: "Bavette d'aloyau",
      spanish: "Vacio",
      dutch: "Vangstuk",
      portuguese: "Vazio",
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
        dutch:
          "Gegrild: 1. Kruid met zout en peper. 2. Grill 3–4 min per kant op hoog vuur. 3. Laat 5 min rusten.",
        portuguese:
          "Grelhado: 1. Temperar com sal e pimenta. 2. Grelhar 3–4 min por lado em fogo alto. 3. Deixar descansar 5 min.",
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
        dutch:
          "Gebakken: 1. Verhit de pan goed. 2. Bak 3–4 min per kant. 3. Bedruipen met boter en kruiden. 4. Laat 5 min rusten.",
        portuguese:
          "Na frigideira: 1. Aquecer bem a frigideira. 2. Selar 3–4 min por lado. 3. Regar com manteiga e ervas. 4. Deixar descansar 5 min.",
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
        dutch:
          "In de oven: 1. Schroeien aan alle kanten. 2. In de oven op 180 °C tot kern 55–57 °C (medium-rare). 3. 10 min laten rusten.",
        portuguese:
          "Assado no forno: 1. Selar todos os lados. 2. Assar a 180 °C até 55–57 °C internos. 3. Descansar 10 min.",
      },
    ],
  },
  {
    id: "12",
    name: {
      english: "Skirt Steak",
      german: "Leistenfleisch",
      italian: "Lombatello",
      french: "Onglet",
      spanish: "Entraña fina",
      dutch: "Onglet",
      portuguese: "Fraldinha fina",
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
        dutch:
          "Gegrild: 1. Marineer 6 uur. 2. Grill 2–3 min per kant op hoog vuur. 3. Laat 5 min rusten. Snijd dun tegen de draad in.",
        portuguese:
          "Grelhado: 1. Marinar por 6 horas. 2. Grelhar 2–3 min por lado. 3. Descansar 5 min. Fatiar fino contra as fibras.",
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
        dutch:
          "Gebakken: 1. Dep droog, goed kruiden. 2. Bak 2–3 min per kant. 3. Rusten en dun snijden.",
        portuguese:
          "Na frigideira: 1. Secar e temperar. 2. Selar 2–3 min de cada lado. 3. Descansar e fatiar fino.",
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
        dutch:
          "Roerbak: 1. Snijd in dunne reepjes. 2. Kort marineren. 3. Roerbak 1–2 min op hoog vuur. Serveer warm.",
        portuguese:
          "Salteado: 1. Cortar em tiras finas. 2. Marinar rapidamente. 3. Saltear 1–2 min em fogo alto. Servir quente.",
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
      dutch: "Longhaas",
      portuguese: "Arrachera",
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
        dutch:
          "Gegrild: 1. Marineer 4–6 uur. 2. Grill op hoge hitte, 3–4 min per kant. 3. Laat rusten en snijd dun tegen de draad in.",
        portuguese:
          "Grelhado: 1. Marinar por 4–6 horas. 2. Grelhar em fogo alto por 3–4 min de cada lado. 3. Deixar descansar antes de fatiar contra as fibras.",
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
        dutch:
          "Gebakken: 1. Kruid met zout en peper. 2. Bak in hete pan 3–4 min per kant. 3. Laat 5 min rusten en snijd dun tegen de draad in.",
        portuguese:
          "Selado na frigideira: 1. Temperar com sal e pimenta. 2. Selar por 3–4 min de cada lado em frigideira quente. 3. Descansar 5 min antes de fatiar contra as fibras.",
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
        dutch:
          "Sous-vide: 1. Vacumeer en gaar 2 uur op 55 °C. 2. Kort dichtschroeien in hete pan. 3. Laat rusten en snijd op.",
        portuguese:
          "Sous-vide: 1. Cozinhar a vácuo a 55 °C por 2 horas. 2. Selar rapidamente em frigideira quente. 3. Deixar descansar antes de cortar.",
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
      dutch: "Runderbaron",
      portuguese: "Barão de carne",
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
        dutch:
          "Geroosterd: 1. Rijkelijk kruiden met zout, peper en kruiden. 2. Rooster op 180 °C gedurende 1,5–2 uur. 3. Laat 15–20 min rusten voor het snijden.",
        portuguese:
          "Assado: 1. Temperar generosamente com sal, pimenta e ervas. 2. Assar a 180 °C por 1,5–2 horas. 3. Deixar descansar 15–20 min antes de fatiar.",
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
        dutch:
          "Gegrild: 1. Wrijf in met olijfolie, zout en peper. 2. Grill 4–5 min per kant op middelhoog vuur. 3. Laat 10 min rusten voor het snijden.",
        portuguese:
          "Grelhado: 1. Esfregar com azeite, sal e pimenta. 2. Grelhar por 4–5 min de cada lado em fogo médio-alto. 3. Descansar 10 min antes de cortar.",
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
        dutch:
          "Sous-vide: 1. Vacumeer en gaar 6 uur op 56 °C. 2. Kort aanbraden in hete pan. 3. Laat 10 min rusten voor het serveren.",
        portuguese:
          "Sous-vide: 1. Selar a vácuo e cozinhar a 56 °C por 6 horas. 2. Selar rapidamente em frigideira quente. 3. Descansar 10 min antes de servir.",
      },
    ],
  },
  {
    id: "15",
    name: {
      english: "Flank Steak",
      german: "Flanke",
      italian: "Scamone basso",
      french: "Bavette de flanchet",
      spanish: "Falda interna",
      dutch: "Vinkenlap",
      portuguese: "Falda fina",
    },
    nutrition: {
      kcal: 190,
      protein: 27,
      saturatedFats: 3.5,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: [
      {
        english:
          "Grilled: 1. Marinate 4+ hours. 2. Grill 3–4 minutes per side. 3. Slice thin against the grain.",
        german:
          "Gegrillt: 1. 4+ Stunden marinieren. 2. 3–4 Min. pro Seite grillen. 3. Dünn gegen die Faser schneiden.",
        italian:
          "Grigliato: 1. Marinare 4+ ore. 2. 3–4 min per lato. 3. Affettare contro fibra.",
        french:
          "Grillé: 1. Mariner 4 h ou plus. 2. Griller 3–4 min par côté. 3. Trancher finement à contre-fibre.",
        spanish:
          "A la parrilla: 1. Marinar 4+ h. 2. Asar 3–4 min por lado. 3. Cortar fino contra la fibra.",
        dutch:
          "Gegrild: 1. Minimaal 4 uur marineren. 2. Grill 3–4 min per kant. 3. Dun snijden tegen de draad.",
        portuguese:
          "Grelhado: 1. Marinar por 4+ horas. 2. Grelhar 3–4 min de cada lado. 3. Cortar fino contra as fibras.",
      },
      {
        english:
          "Pan-seared: 1. High heat, 2 minutes per side. 2. Rest 5 minutes. 3. Slice thin.",
        german:
          "Gebraten: 1. Heiß anbraten, 2 Min je Seite. 2. 5 Min ruhen. 3. Dünn schneiden.",
        italian:
          "In padella: 1. Fuoco alto, 2 min per lato. 2. Riposare 5 min. 3. Affettare.",
        french:
          "Poêlé: 1. Feu vif, 2 min chaque côté. 2. Repos 5 min. 3. Trancher fin.",
        spanish:
          "A la sartén: 1. Fuego alto, 2 min por lado. 2. Reposar 5 min. 3. Cortar fino.",
        dutch:
          "In pan gebakken: 1. Hoog vuur, 2 min per kant. 2. 5 min rusten. 3. Dun snijden.",
        portuguese:
          "Grelhado na frigideira: 1. Fogo alto, 2 min de cada lado. 2. Descansar 5 min. 3. Fatiar fino.",
      },
      {
        english:
          "Taco-style: 1. Spice rub and grill. 2. Rest and chop. 3. Serve in tortillas.",
        german:
          "Taco-Stil: 1. Würzen und grillen. 2. Ruhen lassen, hacken. 3. In Tortillas servieren.",
        italian:
          "Stile taco: 1. Speziare e grigliare. 2. Riposare e tritare. 3. Servire in tortilla.",
        french:
          "Façon taco: 1. Épicer et griller. 2. Repos et hacher. 3. Servir dans tortillas.",
        spanish:
          "Estilo taco: 1. Sazonar y asar. 2. Reposar y picar. 3. Servir en tortillas.",
        dutch:
          "Taco-stijl: 1. Kruid en grill. 2. Laten rusten, hakken. 3. Serveer in tortilla's.",
        portuguese:
          "Estilo taco: 1. Temperar e grelhar. 2. Descansar e picar. 3. Servir em tortillas.",
      },
    ],
  },
  {
    id: "16",
    name: {
      english: "Short Ribs",
      german: "Querrippe",
      italian: "Costine",
      french: "Plat de côtes",
      spanish: "Costillas cortas",
      dutch: "Ribstuk",
      portuguese: "Entrecosto",
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
        dutch:
          "Gestoofd: 1. Aanbraden. 2. 2–3 uur laten sudderen in bouillon. 3. Serveren met ingekookte saus.",
        portuguese:
          "Cozido: 1. Selar os dois lados. 2. Cozinhar em caldo por 2–3 horas. 3. Servir com molho reduzido.",
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
        dutch:
          "Gerookt: 1. Goed kruiden. 2. Roken op lage temperatuur gedurende 4–6 uur. 3. Dun snijden.",
        portuguese:
          "Defumado: 1. Temperar bem. 2. Defumar devagar por 4–6 horas. 3. Fatiar fino.",
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
      dutch: "Neksteak",
      portuguese: "Acém",
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
        dutch:
          "Gegrild: 1. Marineer 4–6 uur. 2. Grill 5–6 min per kant. 3. Laat rusten voor het snijden.",
        portuguese:
          "Grelhado: 1. Marinar por 4–6 horas. 2. Grelhar 5–6 min de cada lado. 3. Descansar antes de fatiar.",
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
        dutch:
          "Gestoofd: 1. Aanzetten in pan. 2. Afblussen met wijn en kruiden. 3. 2 uur zachtjes laten stoven.",
        portuguese:
          "Cozido: 1. Selar na panela. 2. Adicionar vinho e ervas. 3. Cozinhar por 2 horas até ficar macio.",
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
      dutch: "Schouderbladsteak",
      portuguese: "Bife do acém do braço",
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
        dutch:
          "In de pan: 1. Kruiden met zout en peper. 2. 4 min per kant schroeien. 3. Afwerken met boter.",
        portuguese:
          "Na frigideira: 1. Temperar com sal e pimenta. 2. Selar 4 min de cada lado. 3. Finalizar com manteiga.",
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
        dutch:
          "Gegrild: 1. 3 uur marineren. 2. 5 min per kant grillen. 3. Snijden en serveren.",
        portuguese:
          "Grelhado: 1. Marinar por 3 horas. 2. Grelhar 5 min de cada lado. 3. Fatiar e servir.",
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
      dutch: "Schouderstukbiefstuk",
      portuguese: "Bife de acém duro",
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
        dutch:
          "Roerbak: 1. Dun snijden. 2. Snel roerbakken in hete wok. 3. Mengen met saus.",
        portuguese:
          "Salteado: 1. Cortar fino. 2. Cozinhar rapidamente em wok quente. 3. Misturar com molho.",
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
        dutch:
          "Gestoofd: 1. Aanbraden aan beide kanten. 2. 2 uur sudderen in bouillon. 3. Heet serveren.",
        portuguese:
          "Cozido: 1. Dourar dos dois lados. 2. Cozinhar em caldo por 2 horas. 3. Servir quente.",
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
      dutch: "Schouderstuk (Stoofvlees)",
      portuguese: "Acém de dianteiro (assado)",
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
        dutch:
          "Stoofpot: 1. Aanzetten in grote pan. 2. Groenten en bouillon toevoegen. 3. Afgedekt 3 uur sudderen.",
        portuguese:
          "Assado na panela: 1. Selar na panela grande. 2. Adicionar legumes e caldo. 3. Cozinhar tampado por 3 horas.",
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
        dutch:
          "Slowcooker: 1. Vlees, bouillon en kruiden erin. 2. 8 uur op lage stand. 3. Uit elkaar trekken en serveren.",
        portuguese:
          "Panela elétrica: 1. Carne, caldo e ervas. 2. Cozinhar 8h em temperatura baixa. 3. Desfiar e servir.",
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
      dutch: "Nekbraadstuk",
      portuguese: "Acém assado",
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
        dutch:
          "In de oven: 1. Inwrijven met kruiden. 2. Braden op 160°C gedurende 3 uur. 3. Laten rusten voor het snijden.",
        portuguese:
          "Assado no forno: 1. Esfregar com temperos. 2. Assar a 160 °C por 3 horas. 3. Deixar repousar antes de fatiar.",
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
        dutch:
          "Stoofpan: 1. Aanbraden en bouillon toevoegen. 2. Afdekken en 2,5 uur stoven. 3. Serveren met saus.",
        portuguese:
          "Panela de ferro: 1. Selar e adicionar caldo. 2. Tampar e cozinhar por 2,5 horas. 3. Servir com molho.",
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
      dutch: "Ossenstaart",
      portuguese: "Rabo de boi",
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
        dutch:
          "Gestoofd: 1. Kruid met zout en peper. 2. Aanbraden in een hete pan. 3. Voeg groenten en bouillon toe en stoof 3–4 uur op 160°C tot mals.",
        portuguese:
          "Cozido: 1. Temperar com sal e pimenta. 2. Selar em panela quente. 3. Adicionar legumes e caldo e cozinhar por 3–4 horas a 160°C até ficar macio.",
      },
      {
        english:
          "Slow-cooked: 1. Place seasoned oxtail in a slow cooker with stock and aromatics. 2. Cook on low for 8–10 hours until falling off the bone.",
        german:
          "Langsam gegart: 1. Gewürzten Ochsenschwanz mit Brühe und Gewürzen in den Slow Cooker geben. 2. Auf niedriger Stufe 8–10 Stunden garen.",
        italian:
          "Cotto lentamente: 1. Mettere la coda di bue condita in slow cooker con brodo e aromi. 2. Cuocere a bassa temperatura per 8–10 ore.",
        french:
          "Mijoté lentement: 1. Mettre la queue de bœuf assaisonnée avec bouillon et aromates dans la mijoteuse. 2. Cuire à basse température pendant 8–10 heures.",
        spanish:
          "Cocción lenta: 1. Colocar el rabo sazonado con caldo y aromáticos en olla lenta. 2. Cocinar en bajo 8–10 horas.",
        dutch:
          "Langzaam gegaard: 1. Plaats gekruide ossenstaart met bouillon en kruiden in een slowcooker. 2. Kook 8–10 uur op lage stand tot het van het bot valt.",
        portuguese:
          "Cozido lentamente: 1. Coloque o rabo temperado na slow cooker com caldo e aromáticos. 2. Cozinhe por 8–10 horas em temperatura baixa.",
      },
      {
        english:
          "Stewed: 1. Cut into sections and season. 2. Brown in pot. 3. Add wine, broth, and herbs. 4. Simmer gently for 3–4 hours.",
        german:
          "Gekocht: 1. In Stücke schneiden und würzen. 2. Im Topf anbraten. 3. Wein, Brühe und Kräuter hinzufügen. 4. 3–4 Stunden köcheln lassen.",
        italian:
          "Stufato: 1. Tagliare a pezzi e condire. 2. Rosolare in pentola. 3. Aggiungere vino, brodo e erbe. 4. Cuocere a fuoco lento per 3–4 ore.",
        french:
          "Ragoût: 1. Couper en morceaux et assaisonner. 2. Faire revenir. 3. Ajouter vin, bouillon et herbes. 4. Mijoter pendant 3–4 heures.",
        spanish:
          "Estofado: 1. Cortar y sazonar. 2. Dorar en olla. 3. Agregar vino, caldo y hierbas. 4. Cocinar lentamente por 3–4 horas.",
        dutch:
          "Stoofpot: 1. In stukken snijden en kruiden. 2. Aanbraden in een pan. 3. Voeg wijn, bouillon en kruiden toe. 4. Laat 3–4 uur zachtjes sudderen.",
        portuguese:
          "Ensopado: 1. Cortar em pedaços e temperar. 2. Dourar em panela. 3. Adicionar vinho, caldo e ervas. 4. Cozinhar por 3–4 horas em fogo baixo.",
      },
      {
        english:
          "Pressure cooked: 1. Brown oxtail pieces. 2. Add liquid, lock the lid, and cook under pressure for 45–60 minutes. 3. Release and serve.",
        german:
          "Im Schnellkochtopf: 1. Stücke anbraten. 2. Flüssigkeit hinzufügen, Deckel schließen und 45–60 Minuten unter Druck garen. 3. Druck ablassen und servieren.",
        italian:
          "In pentola a pressione: 1. Rosolare i pezzi. 2. Aggiungere liquido, chiudere e cuocere per 45–60 minuti. 3. Sfiatare e servire.",
        french:
          "À l’autocuiseur: 1. Faire revenir les morceaux. 2. Ajouter du liquide, fermer et cuire 45–60 min sous pression. 3. Libérer la vapeur et servir.",
        spanish:
          "A presión: 1. Dorar los trozos. 2. Agregar líquido, cerrar y cocinar a presión por 45–60 minutos. 3. Liberar y servir.",
        dutch:
          "Snelkookpan: 1. Ossenstaart aanbraden. 2. Vloeistof toevoegen, deksel sluiten en 45–60 min onder druk koken. 3. Druk aflaten en serveren.",
        portuguese:
          "Na panela de pressão: 1. Dourar os pedaços. 2. Adicionar líquido, fechar e cozinhar por 45–60 minutos sob pressão. 3. Liberar e servir.",
      },
      {
        english:
          "Roasted: 1. Marinate oxtail overnight. 2. Roast uncovered at 180°C (350°F) for 2.5–3 hours, basting occasionally.",
        german:
          "Geröstet: 1. Über Nacht marinieren. 2. Offen bei 180°C 2,5–3 Stunden braten, gelegentlich übergießen.",
        italian:
          "Arrostito: 1. Marinare per una notte. 2. Arrostire scoperto a 180°C per 2,5–3 ore, bagnando di tanto in tanto.",
        french:
          "Rôti: 1. Faire mariner toute la nuit. 2. Rôtir à découvert à 180°C pendant 2,5–3 h en arrosant régulièrement.",
        spanish:
          "Asado: 1. Marinar durante la noche. 2. Asar sin tapar a 180°C durante 2,5–3 horas, rociando ocasionalmente.",
        dutch:
          "Geroosterd: 1. Marineer de ossenstaart een nacht. 2. Rooster onbedekt op 180°C gedurende 2,5–3 uur, regelmatig bedruipen.",
        portuguese:
          "Assado: 1. Marinar o rabo de boi durante a noite. 2. Assar descoberto a 180°C por 2,5–3 horas, regando de vez em quando.",
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
      dutch: "Schenkel",
      portuguese: "Ossobuco",
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
          "Grilled: 1. Marinate for at least 2 hours. 2. Grill over high heat for 4–5 minutes per side. 3. Rest and slice thinly against the grain.",
        german:
          "Gegrillt: 1. Mindestens 2 Stunden marinieren. 2. Bei hoher Hitze 4–5 Minuten pro Seite grillen. 3. Ruhen lassen und gegen die Faser schneiden.",
        italian:
          "Grigliato: 1. Marinare per almeno 2 ore. 2. Grigliare 4–5 minuti per lato. 3. Far riposare e tagliare controfibra.",
        french:
          "Grillé: 1. Mariner au moins 2 heures. 2. Griller à feu vif 4–5 min de chaque côté. 3. Laisser reposer et trancher dans le sens contraire des fibres.",
        spanish:
          "A la parrilla: 1. Marinar al menos 2 horas. 2. Asar a fuego alto 4–5 minutos por lado. 3. Dejar reposar y cortar en contra de la fibra.",
        dutch:
          "Gegrild: 1. Minimaal 2 uur marineren. 2. Grill 4–5 minuten per kant op hoog vuur. 3. Laat rusten en snijd tegen de draad in.",
        portuguese:
          "Grelhado: 1. Marinar por no mínimo 2 horas. 2. Grelhar por 4–5 minutos de cada lado em fogo alto. 3. Descansar e fatiar contra as fibras.",
      },
      {
        english:
          "Pan-seared: 1. Season or marinate. 2. Sear in a hot skillet with oil for 3–4 minutes per side. 3. Rest and slice thinly.",
        german:
          "Gebraten: 1. Würzen oder marinieren. 2. In heißer Pfanne mit Öl 3–4 Minuten je Seite anbraten. 3. Ruhen lassen und dünn schneiden.",
        italian:
          "In padella: 1. Condire o marinare. 2. Rosolare in padella calda con olio 3–4 minuti per lato. 3. Far riposare e affettare.",
        french:
          "Poêlé: 1. Assaisonner ou mariner. 2. Saisir 3–4 min par côté dans une poêle chaude avec de l'huile. 3. Repos et découpe fine.",
        spanish:
          "A la sartén: 1. Sazonar o marinar. 2. Sellar en sartén caliente con aceite 3–4 min por lado. 3. Reposar y cortar fino.",
        dutch:
          "Gebakken: 1. Kruid of marineer. 2. Bak 3–4 minuten per kant in een hete pan met olie. 3. Laat rusten en dun snijden.",
        portuguese:
          "Na frigideira: 1. Temperar ou marinar. 2. Selar em frigideira quente com óleo por 3–4 minutos de cada lado. 3. Descansar e fatiar.",
      },
      {
        english:
          "Sous-vide: 1. Season and vacuum seal. 2. Cook at 54°C (129°F) for 2 hours. 3. Sear quickly on high heat and slice thinly.",
        german:
          "Sous-vide: 1. Würzen und vakuumieren. 2. Bei 54°C 2 Stunden garen. 3. Kurz scharf anbraten und dünn schneiden.",
        italian:
          "Sous-vide: 1. Condire e sigillare sottovuoto. 2. Cuocere a 54°C per 2 ore. 3. Rosolare brevemente e affettare.",
        french:
          "Sous-vide: 1. Assaisonner et mettre sous vide. 2. Cuire à 54°C pendant 2 h. 3. Saisir brièvement et trancher.",
        spanish:
          "Sous-vide: 1. Sazonar y sellar al vacío. 2. Cocinar a 54°C durante 2 horas. 3. Sellar rápidamente y cortar fino.",
        dutch:
          "Sous-vide: 1. Kruid en vacumeer. 2. Gaar 2 uur op 54°C. 3. Kort schroeien en dun snijden.",
        portuguese:
          "Sous-vide: 1. Temperar e selar a vácuo. 2. Cozinhar a 54°C por 2 horas. 3. Selar rapidamente e fatiar.",
      },
      {
        english:
          "Broiled: 1. Marinate and preheat broiler. 2. Broil 4–5 minutes per side. 3. Rest and slice thinly.",
        german:
          "Überbacken: 1. Marinieren und Grill vorheizen. 2. 4–5 Minuten pro Seite grillen. 3. Ruhen lassen und dünn schneiden.",
        italian:
          "Gratinato: 1. Marinare e preriscaldare il grill. 2. Cuocere 4–5 minuti per lato. 3. Riposare e tagliare.",
        french:
          "Grillé au four: 1. Mariner et préchauffer le gril. 2. 4–5 min de chaque côté. 3. Laisser reposer et trancher.",
        spanish:
          "Al gratén: 1. Marinar y precalentar el gratinador. 2. Cocinar 4–5 min por lado. 3. Reposar y cortar.",
        dutch:
          "Gegrild in oven: 1. Marineer en verwarm de grill voor. 2. Grill 4–5 minuten per kant. 3. Laat rusten en snijd dun.",
        portuguese:
          "Grelhado no forno: 1. Marinar e pré-aquecer o grill. 2. Grelhar 4–5 min de cada lado. 3. Descansar e fatiar.",
      },
      {
        english:
          "Stir-fried: 1. Slice thinly across the grain. 2. Marinate briefly. 3. Stir-fry on high heat for 1–2 minutes until just cooked.",
        german:
          "Gebraten (Streifen): 1. Dünn gegen die Faser schneiden. 2. Kurz marinieren. 3. Bei hoher Hitze 1–2 Minuten braten.",
        italian:
          "Saltato: 1. Affettare sottile controfibra. 2. Marinare brevemente. 3. Saltare in padella per 1–2 minuti a fuoco alto.",
        french:
          "Sauté: 1. Trancher finement contre les fibres. 2. Mariner brièvement. 3. Sauter 1–2 min à feu vif.",
        spanish:
          "Salteado: 1. Cortar fino contra la fibra. 2. Marinar brevemente. 3. Saltear 1–2 minutos a fuego alto.",
        dutch:
          "Roerbak: 1. Snijd dun tegen de draad in. 2. Kort marineren. 3. Roerbak 1–2 minuten op hoog vuur.",
        portuguese:
          "Salteado: 1. Fatiar fino contra as fibras. 2. Marinar rapidamente. 3. Saltear por 1–2 minutos em fogo alto.",
      },
    ],
  },
  {
    id: "24",
    name: {
      english: "Flank section",
      german: "Flankenteil",
      italian: "Fianco intero",
      french: "Flanchet",
      spanish: "Falda entera",
      dutch: "Buiklap",
      portuguese: "Vazio inteiro",
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
          "Slow-cooked: 1. Season and sear the shank. 2. Add aromatic vegetables and broth. 3. Simmer at low heat for 3–4 hours until meat is tender.",
        german:
          "Langsam gegart: 1. Beinscheibe würzen und anbraten. 2. Aromatisches Gemüse und Brühe hinzufügen. 3. Bei niedriger Hitze 3–4 Stunden köcheln lassen.",
        italian:
          "Cottura lenta: 1. Condire e rosolare lo stinco. 2. Aggiungere verdure aromatiche e brodo. 3. Cuocere a fuoco basso per 3–4 ore fino a quando la carne è tenera.",
        french:
          "Cuisson lente: 1. Assaisonner et saisir le jarret. 2. Ajouter des légumes aromatiques et du bouillon. 3. Mijoter à feu doux pendant 3–4 heures jusqu'à tendreté.",
        spanish:
          "Cocción lenta: 1. Sazonar y dorar el jarrete. 2. Agregar verduras aromáticas y caldo. 3. Cocinar a fuego lento durante 3–4 horas hasta que la carne esté tierna.",
        dutch:
          "Langzaam gegaard: 1. Kruid en schroei de schenkel. 2. Voeg aromatische groenten en bouillon toe. 3. Laat 3–4 uur zachtjes sudderen tot het vlees zacht is.",
        portuguese:
          "Cozimento lento: 1. Temperar e selar o ossobuco. 2. Adicionar legumes aromáticos e caldo. 3. Cozinhar em fogo baixo por 3–4 horas até ficar macio.",
      },
      {
        english:
          "Braised: 1. Brown the shank in a heavy pot. 2. Add wine, broth, herbs, and vegetables. 3. Cover and braise in oven at 160°C (320°F) for 2.5–3 hours.",
        german:
          "Geschmort: 1. Beinscheibe in schwerem Topf anbraten. 2. Wein, Brühe, Kräuter und Gemüse hinzufügen. 3. Abdecken und im Ofen bei 160°C 2,5–3 Stunden schmoren.",
        italian:
          "Brasato: 1. Rosolare lo stinco in una pentola pesante. 2. Aggiungere vino, brodo, erbe e verdure. 3. Coprire e brasare in forno a 160°C per 2,5–3 ore.",
        french:
          "Braisé: 1. Faire revenir le jarret dans une cocotte. 2. Ajouter vin, bouillon, herbes et légumes. 3. Couvrir et braiser au four à 160°C pendant 2,5–3 heures.",
        spanish:
          "Estofado: 1. Dorar el jarrete en una olla pesada. 2. Agregar vino, caldo, hierbas y verduras. 3. Tapar y estofar en horno a 160°C durante 2,5–3 horas.",
        dutch:
          "Gestoofd: 1. Braad de schenkel in een zware pan. 2. Voeg wijn, bouillon, kruiden en groenten toe. 3. Dek af en stoof 2,5–3 uur in de oven op 160°C.",
        portuguese:
          "Braseado: 1. Dourar o ossobuco em uma panela pesada. 2. Adicionar vinho, caldo, ervas e legumes. 3. Tampar e brasear no forno a 160°C por 2,5–3 horas.",
      },
      {
        english:
          "Pressure cooked: 1. Sear shank pieces. 2. Add broth and aromatics. 3. Cook under pressure for 45–60 minutes until tender.",
        german:
          "Im Schnellkochtopf: 1. Beinscheibe anbraten. 2. Brühe und Aromen hinzufügen. 3. 45–60 Minuten unter Druck garen.",
        italian:
          "In pentola a pressione: 1. Rosolare lo stinco. 2. Aggiungere brodo e aromi. 3. Cuocere a pressione per 45–60 minuti.",
        french:
          "Autocuiseur: 1. Saisir le jarret. 2. Ajouter du bouillon et des aromates. 3. Cuire sous pression pendant 45–60 minutes.",
        spanish:
          "A presión: 1. Dorar el jarrete. 2. Agregar caldo y aromáticos. 3. Cocinar a presión durante 45–60 minutos.",
        dutch:
          "Snelkookpan: 1. Schroei de schenkel. 2. Voeg bouillon en kruiden toe. 3. Koken onder druk gedurende 45–60 minuten.",
        portuguese:
          "Na panela de pressão: 1. Selar o ossobuco. 2. Adicionar caldo e aromáticos. 3. Cozinhar sob pressão por 45–60 minutos.",
      },
      {
        english:
          "Roasted (cross-cut): 1. Marinate slices of shank. 2. Roast at 200°C (390°F) for 45–60 minutes, turning once.",
        german:
          "Geröstet (Scheiben): 1. Beinscheiben marinieren. 2. Bei 200°C 45–60 Minuten im Ofen braten, einmal wenden.",
        italian:
          "Arrostito (a fette): 1. Marinare le fette di stinco. 2. Arrostire a 200°C per 45–60 minuti, girando una volta.",
        french:
          "Rôti (en tranches): 1. Mariner les tranches de jarret. 2. Rôtir à 200°C pendant 45–60 min en retournant une fois.",
        spanish:
          "Asado (en rebanadas): 1. Marinar las rodajas de jarrete. 2. Asar a 200°C durante 45–60 minutos, girando una vez.",
        dutch:
          "Geroosterd (in plakken): 1. Marineer plakjes schenkel. 2. Rooster op 200°C gedurende 45–60 minuten, één keer omdraaien.",
        portuguese:
          "Assado (em fatias): 1. Marinar as fatias de ossobuco. 2. Assar a 200°C por 45–60 minutos, virando uma vez.",
      },
      {
        english:
          "Sous vide: 1. Season and vacuum seal shank with herbs. 2. Cook in water bath at 74°C (165°F) for 24 hours. 3. Sear before serving.",
        german:
          "Sous-vide: 1. Beinscheibe würzen und vakuumieren mit Kräutern. 2. Bei 74°C 24 Stunden garen. 3. Vor dem Servieren anbraten.",
        italian:
          "Sous-vide: 1. Condire lo stinco e sigillare sottovuoto con erbe. 2. Cuocere a 74°C per 24 ore. 3. Rosolare prima di servire.",
        french:
          "Sous-vide: 1. Assaisonner et mettre le jarret sous vide avec des herbes. 2. Cuire à 74°C pendant 24 h. 3. Saisir avant de servir.",
        spanish:
          "Sous-vide: 1. Sazonar y envasar al vacío el jarrete con hierbas. 2. Cocinar a 74°C durante 24 horas. 3. Dorar antes de servir.",
        dutch:
          "Sous-vide: 1. Kruid en vacumeer de schenkel met kruiden. 2. Gaar 24 uur op 74°C. 3. Schroei kort voor het serveren.",
        portuguese:
          "Sous-vide: 1. Temperar e selar a vácuo o ossobuco com ervas. 2. Cozinhar por 24 horas a 74°C. 3. Selar antes de servir.",
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
      dutch: "Borststuk",
      portuguese: "Peito bovino",
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
        dutch:
          "Gerookt: 1. Kruid met een droge rub. 2. Rook op 110°C gedurende 10–12 uur tot een kerntemperatuur van 90°C. 3. Laat 1 uur rusten voor het snijden.",
        portuguese:
          "Defumado: 1. Temperar com dry rub. 2. Defumar a 110°C por 10–12 horas até atingir 90°C internos. 3. Deixar descansar por 1 hora antes de fatiar.",
      },
      {
        english:
          "Grilled: 1. Slice into thick portions. 2. Marinate or dry-rub. 3. Grill over indirect medium heat for 1.5–2 hours, turning occasionally.",
        german:
          "Gegrillt: 1. In dicke Stücke schneiden. 2. Marinieren oder trocken würzen. 3. Bei indirekter mittlerer Hitze 1,5–2 Stunden grillen.",
        italian:
          "Grigliato: 1. Tagliare in pezzi spessi. 2. Marinare o condire a secco. 3. Cuocere su griglia a calore medio indiretto per 1,5–2 ore.",
        french:
          "Grillé: 1. Couper en morceaux épais. 2. Mariner ou frotter à sec. 3. Griller à chaleur indirecte modérée pendant 1,5–2 heures.",
        spanish:
          "A la parrilla: 1. Cortar en trozos gruesos. 2. Marinar o sazonar en seco. 3. Cocinar a fuego medio indirecto por 1,5–2 horas.",
        dutch:
          "Gegrild: 1. Snijd in dikke stukken. 2. Marineer of gebruik een droge rub. 3. Grill 1,5–2 uur op indirect middelhoog vuur.",
        portuguese:
          "Grelhado: 1. Cortar em pedaços grossos. 2. Marinar ou usar dry rub. 3. Grelhar em calor indireto médio por 1,5–2 horas.",
      },
      {
        english:
          "Braised: 1. Sear brisket in a hot pan. 2. Add onions, garlic, broth, and herbs. 3. Cover and braise at 150°C (300°F) for 4 hours.",
        german:
          "Geschmort: 1. Bruststück scharf anbraten. 2. Zwiebeln, Knoblauch, Brühe und Kräuter hinzufügen. 3. Zugedeckt bei 150°C 4 Stunden schmoren.",
        italian:
          "Brasato: 1. Rosolare il petto in padella. 2. Aggiungere cipolle, aglio, brodo ed erbe. 3. Coprire e brasare a 150°C per 4 ore.",
        french:
          "Braisé: 1. Saisir la poitrine. 2. Ajouter oignons, ail, bouillon et herbes. 3. Couvrir et braiser à 150°C pendant 4 heures.",
        spanish:
          "Estofado: 1. Dorar el pecho en sartén. 2. Agregar cebolla, ajo, caldo y hierbas. 3. Cocinar tapado a 150°C por 4 horas.",
        dutch:
          "Gestoofd: 1. Schroei het borststuk in een hete pan. 2. Voeg ui, knoflook, bouillon en kruiden toe. 3. Stoof afgedekt 4 uur op 150°C.",
        portuguese:
          "Cozido: 1. Selar o peito na panela quente. 2. Adicionar cebola, alho, caldo e ervas. 3. Cozinhar tampado a 150°C por 4 horas.",
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
      dutch: "Borstpunt",
      portuguese: "Ponta do peito",
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
        dutch:
          "Gestoofd: 1. Kruid en schroei de borstpunt dicht. 2. Voeg bouillon en groenten toe. 3. Stoof 3–4 uur op 160°C tot mals.",
        portuguese:
          "Cozido: 1. Temperar e selar a ponta do peito. 2. Adicionar caldo e legumes. 3. Cozinhar a 160°C por 3–4 horas até ficar macio.",
      },
      {
        english:
          "Burnt Ends: 1. Smoke the whole point at 110°C for 6 hours. 2. Cut into cubes, sauce, and return to smoker for 1–2 hours.",
        german:
          "Burnt Ends: 1. Brustspitze 6 Stunden bei 110°C räuchern. 2. In Würfel schneiden, mit Sauce mischen, 1–2 weitere Stunden räuchern.",
        italian:
          "Burnt Ends: 1. Affumicare la punta intera per 6 ore a 110°C. 2. Tagliare a cubetti, aggiungere salsa e rimettere a cuocere per 1–2 ore.",
        french:
          "Burnt Ends: 1. Fumer la pointe entière à 110°C pendant 6h. 2. Couper en cubes, napper de sauce, et refumer 1–2h.",
        spanish:
          "Burnt Ends: 1. Ahumar la punta entera por 6 horas a 110°C. 2. Cortar en cubos, añadir salsa y ahumar 1–2 horas más.",
        dutch:
          "Burnt Ends: 1. Rook de borstpunt 6 uur op 110°C. 2. Snijd in blokjes, voeg saus toe en rook nog 1–2 uur.",
        portuguese:
          "Burnt Ends: 1. Defumar a ponta inteira por 6h a 110°C. 2. Cortar em cubos, adicionar molho e defumar mais 1–2h.",
      },
      {
        english:
          "Oven-roasted: 1. Rub with spices. 2. Roast uncovered at 180°C (350°F) for 2 hours. 3. Cover and continue for 1–2 more hours until fork-tender.",
        german:
          "Im Ofen: 1. Mit Gewürzen einreiben. 2. 2 Stunden offen bei 180°C braten. 3. Abdecken und weitere 1–2 Stunden garen bis zart.",
        italian:
          "Al forno: 1. Strofinare con spezie. 2. Cuocere scoperto a 180°C per 2 ore. 3. Coprire e cuocere altre 1–2 ore finché tenero.",
        french:
          "Rôti au four: 1. Frotter d'épices. 2. Cuire à découvert à 180°C pendant 2h. 3. Couvrir et poursuivre 1–2h jusqu'à tendreté.",
        spanish:
          "Al horno: 1. Frotar con especias. 2. Hornear sin tapa a 180°C por 2h. 3. Cubrir y seguir 1–2h hasta que esté tierno.",
        dutch:
          "In de oven: 1. Wrijf in met kruiden. 2. Rooster 2 uur open op 180°C. 3. Dek af en rooster nog 1–2 uur tot boterzacht.",
        portuguese:
          "Assado: 1. Esfregar com especiarias. 2. Assar descoberto a 180°C por 2h. 3. Cobrir e assar mais 1–2h até macio.",
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
      dutch: "Nek",
      portuguese: "Pescoço",
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
        dutch:
          "Gestooofd: 1. In stukken snijden en kruiden. 2. Aanbraden in een pan. 3. Voeg vocht toe en laat 2–3 uur zachtjes sudderen.",
        portuguese:
          "Cozido: 1. Cortar em pedaços e temperar. 2. Dourar na panela. 3. Adicionar líquido e cozinhar em fogo brando por 2–3 horas.",
      },
      {
        english:
          "Roasted: 1. Rub with oil and herbs. 2. Roast uncovered at 180°C (350°F) for 2 hours. 3. Baste occasionally and rest before slicing.",
        german:
          "Gebraten: 1. Mit Öl und Kräutern einreiben. 2. Offen bei 180°C 2 Stunden braten. 3. Gelegentlich übergießen und vor dem Schneiden ruhen lassen.",
        italian:
          "Arrosto: 1. Strofinare con olio ed erbe. 2. Arrostire scoperto a 180°C per 2 ore. 3. Irrorare durante la cottura e lasciar riposare prima di affettare.",
        french:
          "Rôti: 1. Frotter avec de l'huile et des herbes. 2. Rôtir à découvert à 180°C pendant 2 heures. 3. Arroser et laisser reposer avant de trancher.",
        spanish:
          "Asado: 1. Frotar con aceite y hierbas. 2. Asar sin tapar a 180°C durante 2 horas. 3. Regar durante la cocción y dejar reposar antes de cortar.",
        dutch:
          "Geroosterd: 1. Wrijf in met olie en kruiden. 2. Rooster onbedekt 2 uur op 180°C. 3. Bedruip af en toe en laat rusten voor het snijden.",
        portuguese:
          "Assado: 1. Esfregar com óleo e ervas. 2. Assar descoberto a 180°C por 2 horas. 3. Regar durante o cozimento e deixar descansar antes de fatiar.",
      },
      {
        english:
          "Slow-cooked: 1. Place seasoned neck in slow cooker with vegetables and broth. 2. Cook on low for 8–10 hours until falling apart.",
        german:
          "Langsam gegart: 1. Gewürzten Hals mit Gemüse und Brühe in den Slow Cooker geben. 2. Auf niedriger Stufe 8–10 Stunden garen bis zart.",
        italian:
          "Cottura lenta: 1. Mettere il collo condito nella slow cooker con verdure e brodo. 2. Cuocere a bassa temperatura per 8–10 ore.",
        french:
          "Cuisson lente: 1. Mettre le cou assaisonné dans une mijoteuse avec légumes et bouillon. 2. Cuire à basse température 8–10 heures.",
        spanish:
          "Cocción lenta: 1. Poner el cuello sazonado en una olla lenta con verduras y caldo. 2. Cocinar a baja temperatura durante 8–10 horas.",
        dutch:
          "Slowcooker: 1. Doe de gekruide nek met groenten en bouillon in de slowcooker. 2. Kook 8–10 uur op lage stand tot hij uit elkaar valt.",
        portuguese:
          "Cozimento lento: 1. Colocar o pescoço temperado na slow cooker com legumes e caldo. 2. Cozinhar em temperatura baixa por 8–10 horas.",
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
      dutch: "Wang",
      portuguese: "Bochecha",
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
          "Slow-braised: 1. Season and sear beef cheeks. 2. Add red wine and vegetables. 3. Braise at 150°C (300°F) for 3–4 hours until tender.",
        german:
          "Langsam geschmort: 1. Backen würzen und anbraten. 2. Rotwein und Gemüse hinzufügen. 3. Bei 150°C 3–4 Stunden schmoren, bis sie zart sind.",
        italian:
          "Brasate lentamente: 1. Condire e rosolare le guance. 2. Aggiungere vino rosso e verdure. 3. Brasare a 150°C per 3–4 ore fino a renderle tenere.",
        french:
          "Braisée doucement: 1. Assaisonner et saisir les joues. 2. Ajouter vin rouge et légumes. 3. Braiser à 150°C pendant 3–4 heures jusqu'à tendreté.",
        spanish:
          "Estofado lento: 1. Sazonar y dorar las carrilleras. 2. Agregar vino tinto y verduras. 3. Estofar a 150°C durante 3–4 horas hasta que estén tiernas.",
        dutch:
          "Langzaam gestoofd: 1. Wangen kruiden en aanbraden. 2. Voeg rode wijn en groenten toe. 3. Stoven op 150°C gedurende 3–4 uur tot ze mals zijn.",
        portuguese:
          "Cozido lento: 1. Temperar e selar as bochechas. 2. Adicionar vinho tinto e legumes. 3. Cozinhar a 150°C por 3–4 horas até ficarem macias.",
      },
      {
        english:
          "Pressure-cooked: 1. Brown seasoned cheeks. 2. Add liquid and aromatics. 3. Cook under pressure for 45–60 minutes.",
        german:
          "Im Schnellkochtopf: 1. Gewürzte Backen anbraten. 2. Flüssigkeit und Gewürze hinzufügen. 3. 45–60 Minuten unter Druck garen.",
        italian:
          "A pressione: 1. Rosolare le guance condite. 2. Aggiungere liquido e aromi. 3. Cuocere a pressione per 45–60 minuti.",
        french:
          "À l'autocuiseur: 1. Faire revenir les joues assaisonnées. 2. Ajouter liquide et aromates. 3. Cuire sous pression 45–60 minutes.",
        spanish:
          "Olla a presión: 1. Dorar las carrilleras sazonadas. 2. Agregar líquido y aromáticos. 3. Cocinar a presión durante 45–60 minutos.",
        dutch:
          "Snelkookpan: 1. Gekruide wangen aanbraden. 2. Voeg vocht en kruiden toe. 3. 45–60 minuten onder druk koken.",
        portuguese:
          "Na panela de pressão: 1. Selar as bochechas temperadas. 2. Adicionar líquido e aromáticos. 3. Cozinhar sob pressão por 45–60 minutos.",
      },
      {
        english:
          "Sous-vide: 1. Season cheeks and vacuum-seal with herbs. 2. Cook at 80°C (176°F) for 18–24 hours. 3. Sear before serving.",
        german:
          "Sous-vide: 1. Backen würzen und mit Kräutern vakuumieren. 2. Bei 80°C für 18–24 Stunden garen. 3. Vor dem Servieren anbraten.",
        italian:
          "Sous-vide: 1. Condire le guance e sigillare sottovuoto con erbe. 2. Cuocere a 80°C per 18–24 ore. 3. Rosolare prima di servire.",
        french:
          "Sous-vide: 1. Assaisonner les joues et les mettre sous vide avec des herbes. 2. Cuire à 80°C pendant 18–24 heures. 3. Saisir avant de servir.",
        spanish:
          "Sous-vide: 1. Sazonar las carrilleras y sellar al vacío con hierbas. 2. Cocinar a 80°C durante 18–24 horas. 3. Dorar antes de servir.",
        dutch:
          "Sous-vide: 1. Wangen kruiden en vacuüm verpakken met kruiden. 2. Garen op 80°C gedurende 18–24 uur. 3. Kort aanbakken voor het serveren.",
        portuguese:
          "Sous-vide: 1. Temperar as bochechas e selar a vácuo com ervas. 2. Cozinhar a 80°C por 18–24 horas. 3. Selar antes de servir.",
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
      dutch: "Tong",
      portuguese: "Língua",
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
          "Gekocht: 1. Ganze Zunge in Salzwasser mit Gewürzen 2,5–3 Stunden köcheln lassen. 2. Haut warm abziehen. 3. In Scheiben servieren.",
        italian:
          "Bollita: 1. Cuocere la lingua intera in acqua salata con aromi per 2,5–3 ore. 2. Pelare da calda. 3. Affettare e servire.",
        french:
          "Bouillie: 1. Cuire la langue entière dans l’eau salée avec aromates pendant 2,5–3 h. 2. Retirer la peau tiède. 3. Trancher et servir.",
        spanish:
          "Hervida: 1. Cocer la lengua entera en agua salada con aromáticos por 2,5–3 horas. 2. Pelar caliente. 3. Cortar en rebanadas.",
        dutch:
          "Gekookt: 1. Laat de hele tong 2,5–3 uur sudderen in gezouten water met kruiden. 2. Trek het vel eraf terwijl het warm is. 3. In plakken snijden en warm of koud serveren.",
        portuguese:
          "Cozida: 1. Cozinhar a língua inteira em água salgada com aromáticos por 2,5–3 horas. 2. Retirar a pele enquanto estiver quente. 3. Fatiar e servir quente ou fria.",
      },
      {
        english:
          "Braised: 1. Brown peeled, boiled tongue in a pan. 2. Add stock, wine, and vegetables. 3. Simmer covered for 1–2 hours until very tender.",
        german:
          "Geschmort: 1. Gekochte und geschälte Zunge anbraten. 2. Brühe, Wein und Gemüse hinzufügen. 3. Zugedeckt 1–2 Stunden köcheln lassen.",
        italian:
          "Brasata: 1. Rosolare la lingua lessata e pelata. 2. Aggiungere brodo, vino e verdure. 3. Cuocere coperto per 1–2 ore.",
        french:
          "Braisée: 1. Faire revenir la langue bouillie et pelée. 2. Ajouter bouillon, vin et légumes. 3. Mijoter à couvert pendant 1–2 heures.",
        spanish:
          "Estofada: 1. Dorar la lengua cocida y pelada. 2. Agregar caldo, vino y verduras. 3. Cocinar tapado por 1–2 horas.",
        dutch:
          "Gestoofd: 1. Geblancheerde en gepelde tong aanbraden. 2. Voeg bouillon, wijn en groenten toe. 3. Gedekt laten sudderen voor 1–2 uur.",
        portuguese:
          "Estufada: 1. Selar a língua cozida e pelada. 2. Adicionar caldo, vinho e legumes. 3. Cozinhar tampado por 1–2 horas.",
      },
      {
        english:
          "Grilled/seared: 1. After boiling and peeling, slice tongue. 2. Sear or grill slices briefly over high heat. 3. Serve with sauce or in tacos.",
        german:
          "Gegrillt/angebraten: 1. Zunge nach dem Kochen und Häuten in Scheiben schneiden. 2. Kurz bei hoher Hitze grillen oder anbraten. 3. Mit Sauce oder in Tacos servieren.",
        italian:
          "Grigliata/rosolata: 1. Affettare la lingua dopo la bollitura e pelatura. 2. Rosolare o grigliare le fette a fuoco alto. 3. Servire con salsa o nei tacos.",
        french:
          "Grillée/poêlée: 1. Trancher la langue après cuisson et pelage. 2. Faire griller ou poêler brièvement à feu vif. 3. Servir avec sauce ou dans des tacos.",
        spanish:
          "A la plancha/asada: 1. Cortar la lengua tras cocerla y pelarla. 2. Dorar las rebanadas a fuego alto. 3. Servir con salsa o en tacos.",
        dutch:
          "Gegrild/gebakken: 1. Snijd de gekookte en gepelde tong in plakken. 2. Grill of bak kort op hoge temperatuur. 3. Serveer met saus of in tacos.",
        portuguese:
          "Grelhada/salteada: 1. Cortar a língua cozida e pelada em fatias. 2. Grelhar ou saltear em fogo alto. 3. Servir com molho ou em tacos.",
      },
    ],
  },
];
