export type Nutrition = {
  kcal: number;
  protein: number;
  saturatedFats: number;
  unsaturatedFats: number;
  carbs: number;
};

export type TranslatedCut = {
  english: string;
  german: string;
  italian: string;
  french: string;
  spanish: string;
};

export type BeefCut = {
  id: string;
  name: TranslatedCut;
  nutrition: Nutrition;
  preparation: string[];
};

export const beefCuts: BeefCut[] = [
  {
    id: "1",
    name: {
      english: "Short rib",
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
    preparation: ["Grill", "Stews", "Frying"],
  },
  {
    id: "2",
    name: {
      english: "Rib steaks",
      german: "Rippensteaks",
      italian: "Costata",
      french: "Côtes, entrecôtes",
      spanish: "Chuletón",
    },
    nutrition: {
      kcal: 250,
      protein: 22,
      saturatedFats: 10,
      unsaturatedFats: 7,
      carbs: 0,
    },
    preparation: ["Grill", "Pan-sear"],
  },
  {
    id: "3",
    name: {
      english: "Sirloin steak",
      german: "Lendensteak",
      italian: "Controfiletto",
      french: "Faux-filet",
      spanish: "Lomo bajo",
    },
    nutrition: {
      kcal: 230,
      protein: 21,
      saturatedFats: 7,
      unsaturatedFats: 8,
      carbs: 0,
    },
    preparation: ["Grill", "Pan-fry", "Broil"],
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
      kcal: 190,
      protein: 20,
      saturatedFats: 5,
      unsaturatedFats: 7,
      carbs: 0,
    },
    preparation: ["Grill", "Pan-sear", "Roast"],
  },
  {
    id: "5",
    name: {
      english: "Rump steak",
      german: "Hüftsteak",
      italian: "Scamone",
      french: "Rumsteck",
      spanish: "Cadera",
    },
    nutrition: {
      kcal: 210,
      protein: 21,
      saturatedFats: 6,
      unsaturatedFats: 8,
      carbs: 0,
    },
    preparation: ["Grill", "Frying"],
  },
  {
    id: "6",
    name: {
      english: "Knuckle",
      german: "Rundstück",
      italian: "Girello",
      french: "Rond de gîte",
      spanish: "Redondo",
    },
    nutrition: {
      kcal: 185,
      protein: 21,
      saturatedFats: 4,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: ["Roast", "Boil", "Stew"],
  },
  {
    id: "7",
    name: {
      english: "Thick flank",
      german: "Oberschale",
      italian: "Fesa esterna",
      french: "Tende de tranche",
      spanish: "Tapilla",
    },
    nutrition: {
      kcal: 195,
      protein: 22,
      saturatedFats: 5,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: ["Roast", "Grill", "Stir-fry"],
  },
  {
    id: "8",
    name: {
      english: "Silverside",
      german: "Unterschale",
      italian: "Fesa interna",
      french: "Gîte à la noix",
      spanish: "Contra",
    },
    nutrition: {
      kcal: 185,
      protein: 20,
      saturatedFats: 4,
      unsaturatedFats: 5,
      carbs: 0,
    },
    preparation: ["Roast", "Boil", "Braised"],
  },
  {
    id: "9",
    name: {
      english: "Spider steak",
      german: "Deckel",
      italian: "Scaramella",
      french: "Araignée",
      spanish: "Solomillo de aguja",
    },
    nutrition: {
      kcal: 200,
      protein: 20,
      saturatedFats: 6,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: ["Grill", "Pan-fry"],
  },
  {
    id: "10",
    name: {
      english: "Thick skirt",
      german: "Dicke Hüfte",
      italian: "Pancia",
      french: "Plat de tranche",
      spanish: "Rabillo de cadera",
    },
    nutrition: {
      kcal: 210,
      protein: 22,
      saturatedFats: 7,
      unsaturatedFats: 7,
      carbs: 0,
    },
    preparation: ["Grill", "Roast", "Braised"],
  },
  {
    id: "11",
    name: {
      english: "Flank steak",
      german: "Flanke",
      italian: "Fiocco",
      french: "Bavette d'aloyau",
      spanish: "Falda",
    },
    nutrition: {
      kcal: 210,
      protein: 21,
      saturatedFats: 6,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: ["Grill", "Marinated", "Stir-fry"],
  },
  {
    id: "12",
    name: {
      english: "Skirt steak",
      german: "Bauchlappen",
      italian: "Diaframma",
      french: "Hampe",
      spanish: "Entraña",
    },
    nutrition: {
      kcal: 215,
      protein: 20,
      saturatedFats: 7,
      unsaturatedFats: 7,
      carbs: 0,
    },
    preparation: ["Grill", "Sear", "Tacos"],
  },
  {
    id: "13",
    name: {
      english: "Hanger steak",
      german: "Nierenzapfen",
      italian: "Lombatello",
      french: "Onglet",
      spanish: "Solomillo de pulmón",
    },
    nutrition: {
      kcal: 220,
      protein: 22,
      saturatedFats: 6,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: ["Grill", "Pan-fry"],
  },
  {
    id: "14",
    name: {
      english: "Baron of beef",
      german: "Rostbraten",
      italian: "Scamone posteriore",
      french: "Aiguillette baronne",
      spanish: "Tapa de cadera",
    },
    nutrition: {
      kcal: 200,
      protein: 20,
      saturatedFats: 5,
      unsaturatedFats: 7,
      carbs: 0,
    },
    preparation: ["Roast", "Grill"],
  },
  {
    id: "15",
    name: {
      english: "Flank steak (flap)",
      german: "Bauchlappen (Flap)",
      italian: "Fiocco",
      french: "Bavette de flanchet",
      spanish: "Falda de vacuno",
    },
    nutrition: {
      kcal: 210,
      protein: 21,
      saturatedFats: 6,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: ["Grill", "Stir-fry"],
  },
  {
    id: "16",
    name: {
      english: "Short plate",
      german: "Bauchstück",
      italian: "Pancetta",
      french: "Plat de côtes",
      spanish: "Plato corto",
    },
    nutrition: {
      kcal: 240,
      protein: 19,
      saturatedFats: 9,
      unsaturatedFats: 7,
      carbs: 0,
    },
    preparation: ["Braise", "Soup", "Stew"],
  },
  {
    id: "17",
    name: {
      english: "Chuck steak",
      german: "Schaufelstück",
      italian: "Spalla",
      french: "Macreuse à bifteck",
      spanish: "Aguja de espaldilla",
    },
    nutrition: {
      kcal: 230,
      protein: 21,
      saturatedFats: 8,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: ["Grill", "Stew", "Braised"],
  },
  {
    id: "18",
    name: {
      english: "Shoulder blade steak",
      german: "Schulterstück",
      italian: "Copertina di spalla",
      french: "Paleron",
      spanish: "Espaldilla",
    },
    nutrition: {
      kcal: 220,
      protein: 20,
      saturatedFats: 7,
      unsaturatedFats: 7,
      carbs: 0,
    },
    preparation: ["Stews", "Grill", "Roast"],
  },
  {
    id: "19",
    name: {
      english: "Shoulder clod steak",
      german: "Bugstück",
      italian: "Spalla di manzo",
      french: "Jumeau à bifteck",
      spanish: "Aguja",
    },
    nutrition: {
      kcal: 225,
      protein: 21,
      saturatedFats: 6,
      unsaturatedFats: 7,
      carbs: 0,
    },
    preparation: ["Stews", "Braised"],
  },
  {
    id: "20",
    name: {
      english: "Shoulder clod (pot roast)",
      german: "Bugstück (Schmorbraten)",
      italian: "Spalla (bollito)",
      french: "Jumeau à pot-au-feu",
      spanish: "Aguja para cocido",
    },
    nutrition: {
      kcal: 220,
      protein: 20,
      saturatedFats: 7,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: ["Boil", "Stews", "Pot roast"],
  },
  {
    id: "21",
    name: {
      english: "Chuck roast",
      german: "Bugbraten",
      italian: "Cappello del prete",
      french: "Macreuse à pot-au-feu",
      spanish: "Aguja para guisar",
    },
    nutrition: {
      kcal: 230,
      protein: 20,
      saturatedFats: 8,
      unsaturatedFats: 7,
      carbs: 0,
    },
    preparation: ["Braise", "Stews", "Slow cook"],
  },
  {
    id: "22",
    name: {
      english: "Oxtail",
      german: "Ochsenschwanz",
      italian: "Coda",
      french: "Queue",
      spanish: "Rabo de toro",
    },
    nutrition: {
      kcal: 260,
      protein: 18,
      saturatedFats: 10,
      unsaturatedFats: 8,
      carbs: 0,
    },
    preparation: ["Stews", "Soup", "Braised"],
  },
  {
    id: "23",
    name: {
      english: "Shank",
      german: "Hesse",
      italian: "Geretto",
      french: "Gîte",
      spanish: "Morcillo",
    },
    nutrition: {
      kcal: 210,
      protein: 20,
      saturatedFats: 6,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: ["Boil", "Braise", "Slow cook"],
  },
  {
    id: "24",
    name: {
      english: "Flank",
      german: "Flanke",
      italian: "Fiocco",
      french: "Flanchet",
      spanish: "Falda",
    },
    nutrition: {
      kcal: 205,
      protein: 21,
      saturatedFats: 6,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: ["Grill", "Roast"],
  },
  {
    id: "25",
    name: {
      english: "Brisket",
      german: "Bruststück",
      italian: "Punta di petto",
      french: "Tendron, milieu de poitrine",
      spanish: "Pecho medio",
    },
    nutrition: {
      kcal: 250,
      protein: 19,
      saturatedFats: 9,
      unsaturatedFats: 8,
      carbs: 0,
    },
    preparation: ["Slow roast", "Braise", "Smoke"],
  },
  {
    id: "26",
    name: {
      english: "Brisket point",
      german: "Vorderes Bruststück",
      italian: "Petto anteriore",
      french: "Gros bout de poitrine",
      spanish: "Pecho delantero",
    },
    nutrition: {
      kcal: 260,
      protein: 18,
      saturatedFats: 10,
      unsaturatedFats: 7,
      carbs: 0,
    },
    preparation: ["Roast", "Braise"],
  },
  {
    id: "27",
    name: {
      english: "Neck",
      german: "Hals",
      italian: "Collo",
      french: "Collier",
      spanish: "Pescuezo",
    },
    nutrition: {
      kcal: 225,
      protein: 20,
      saturatedFats: 8,
      unsaturatedFats: 6,
      carbs: 0,
    },
    preparation: ["Boil", "Stews"],
  },
  {
    id: "28",
    name: {
      english: "Cheek",
      german: "Backe",
      italian: "Guancia",
      french: "Plat de joue",
      spanish: "Carrillada",
    },
    nutrition: {
      kcal: 235,
      protein: 20,
      saturatedFats: 7,
      unsaturatedFats: 7,
      carbs: 0,
    },
    preparation: ["Braise", "Stews"],
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
      kcal: 270,
      protein: 16,
      saturatedFats: 11,
      unsaturatedFats: 8,
      carbs: 0,
    },
    preparation: ["Boil", "Stews", "Pickled"],
  },
];
