export const translateLabel = (label: string, language: string): string => {
  const translations: Record<string, Record<string, string>> = {
    calories: {
      english: "Calories",
      german: "Kalorien",
      spanish: "Calorías",
      italian: "Calorie",
      french: "Calories",
      portuguese: "Calorias",
      dutch: "Calorieën",
    },
    proteins: {
      english: "Proteins",
      german: "Proteine",
      spanish: "Proteínas",
      italian: "Proteine",
      french: "Protéines",
      portuguese: "Proteínas",
      dutch: "Proteine",
    },
    saturatedFats: {
      english: "Fats (sat)",
      german: "Fette (Gess)",
      spanish: "Grasas (sat)",
      italian: "Grassi (sat)",
      french: "Graisses (sat)",
      portuguese: "Gorduras (sat)",
      dutch: "Vetten (Verz)",
    },
    unsaturatedFats: {
      english: "Fats (unsat)",
      german: "Fette (ung)",
      spanish: "Grasas (ins)",
      italian: "Grassi (ins)",
      french: "Graisses (ins)",
      portuguese: "Gorduras (ins)",
      dutch: "Vet (onv)",
    },
    carbs: {
      english: "Carbs",
      german: "Kohlenhydrate",
      spanish: "Carbohidratos",
      italian: "Carboidrati",
      french: "Glucides",
      portuguese: "Carboidratos",
      dutch: "Koolhydraten",
    },
    preparationMethods: {
      english: "Preparation Methods",
      german: "Zubereitungsmethoden",
      spanish: "Métodos de preparación",
      italian: "Metodi di preparazione",
      french: "Méthodes de préparation",
      portuguese: "Métodos de preparação",
      dutch: "Instructies",
    },
    nutritionalValue: {
      english: "Nutritional Value",
      german: "Nährwert",
      spanish: "Valor nutricional",
      italian: "Valore nutrizionale",
      french: "Valeur nutritionnelle",
      portuguese: "Valor nutricional",
      dutch: "Voedingswaarden",
    },
    selectABeefCut: {
      english: "Select a beef cut",
      german: "Wählen Sie einen Rindfleischschnitt",
      spanish: "Seleccione un corte de carne de res",
      italian: "Seleziona un taglio di manzo",
      french: "Sélectionnez une coupe de bœuf",
      portuguese: "Selecione um corte de carne bovina",
      dutch: "Kies een stuk vlees",
    },
    butcher: {
      english: "Butcher",
      german: "Metzger",
      spanish: "Carnicero",
      italian: "Macellaio",
      french: "Boucher",
      portuguese: "Açougueiro",
      dutch: "Slager",
    },
    helperText: {
      english:
        "Click on a beef cut to explore its nutrition and preparation method",
      german:
        "Klicken Sie auf einen Rindfleischschnitt, um seine Nährwerte und Zubereitungsmethoden zu erkunden",
      spanish:
        "Haz clic en un corte de res para explorar su valor nutricional y método de preparación",
      italian:
        "Fai clic su un taglio di manzo per esplorarne il valore nutrizionale e il metodo di preparazione",
      french:
        "Cliquez sur une coupe de bœuf pour découvrir sa nutrition et sa méthode de préparation",
      portuguese:
        "Clique em um corte de carne bovina para explorar seu valor nutricional e método de preparo",
      dutch:
        "Klik op een stuk vlees om de juiste instructies en voedingswaarden in te zien",
    },
    donenessLevel: {
      english: "Doneness",
      german: "Garstufe",
      french: "Cuisson",
      italian: "Cottura",
      spanish: "Cocción",
      dutch: "Gaarheid",
      portuguese: "Ponto da carne",
    },
    temperature: {
      english: "Temperature",
      german: "Temperatur",
      french: "Température",
      italian: "Temperatura",
      spanish: "Temperatura",
      dutch: "Temperatuur",
      portuguese: "Temperatura",
    },
    rare: {
      english: "Rare",
      german: "Blutig",
      french: "Saignant",
      italian: "Al sangue",
      spanish: "Poco hecho",
      dutch: "Rare",
      portuguese: "Malpassado",
    },
    mediumrare: {
      english: "Medium-Rare",
      german: "Medium rare",
      french: "À point saignant",
      italian: "Cottura media al sangue",
      spanish: "Término medio menos",
      dutch: "Medium-Rare",
      portuguese: "Ao ponto para mal",
    },
    medium: {
      english: "Medium",
      german: "Medium",
      french: "À point",
      italian: "Media cottura",
      spanish: "Término medio",
      dutch: "Medium",
      portuguese: "Ao ponto",
    },
    mediumwell: {
      english: "Medium-Well",
      german: "Fast durch",
      french: "Bien cuit",
      italian: "Ben cotto",
      spanish: "Término medio alto",
      dutch: "Medium-Well",
      portuguese: "Ao ponto para bem",
    },
    welldone: {
      english: "Well-Done",
      german: "Durch",
      french: "Très bien cuit",
      italian: "Molto cotto",
      spanish: "Bien cocido",
      dutch: "Well-Done",
      portuguese: "Bem passado",
    },
    chooser: {
      english: "Choose your beef cut!",
      german: "Wähle deinen Rindfleischschnitt!",
      french: "Choisissez votre morceau de bœuf !",
      italian: "Scegli il tuo taglio!",
      spanish: "¡Escoge tu corte!",
      dutch: "Kies je rundstuk!",
      portuguese: "Escolha o seu corte de carne!",
    },
  };

  return (
    translations[label]?.[language] ?? translations[label]?.english ?? label
  );
};

export const referral: Record<string, React.ReactNode> = {
  english: (
    <>
      Need a meat thermometer with a phone app for precision while grilling? Get
      yours{" "}
      <a
        href="https://armeator.com/yllebntc"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      . Use discount code <strong>SANDERVANECK</strong> now for a 10% discount!
    </>
  ),
  german: (
    <>
      Brauchen Sie ein Fleischthermometer mit App für präzises Grillen? Holen
      Sie sich Ihres{" "}
      <a
        href="https://armeator.com/yllebntc"
        target="_blank"
        rel="noopener noreferrer"
      >
        hier
      </a>
      . Verwenden Sie den Rabattcode <strong>SANDERVANECK</strong> für 10%
      Rabatt!
    </>
  ),
  spanish: (
    <>
      ¿Necesitas un termómetro de carne con app para asar con precisión?
      Consigue el tuyo{" "}
      <a
        href="https://armeator.com/yllebntc"
        target="_blank"
        rel="noopener noreferrer"
      >
        aquí
      </a>
      . ¡Usa el código de descuento <strong>SANDERVANECK</strong> para un 10% de
      descuento!
    </>
  ),
  italian: (
    <>
      Hai bisogno di un termometro per carne con app per grigliare con
      precisione? Prendilo{" "}
      <a
        href="https://armeator.com/yllebntc"
        target="_blank"
        rel="noopener noreferrer"
      >
        qui
      </a>
      . Usa il codice sconto <strong>SANDERVANECK</strong> per uno sconto del
      10%!
    </>
  ),
  french: (
    <>
      Besoin d’un thermomètre à viande connecté pour une cuisson précise au
      barbecue ? Obtenez-le{" "}
      <a
        href="https://armeator.com/yllebntc"
        target="_blank"
        rel="noopener noreferrer"
      >
        ici
      </a>
      . Utilisez le code promo <strong>SANDERVANECK</strong> pour 10% de
      réduction !
    </>
  ),
  portuguese: (
    <>
      Precisa de um termômetro de carne com aplicativo para grelhar com
      precisão? Adquira o seu{" "}
      <a
        href="https://armeator.com/yllebntc"
        target="_blank"
        rel="noopener noreferrer"
      >
        aqui
      </a>
      . Use o código de desconto <strong>SANDERVANECK</strong> e ganhe 10% off!
    </>
  ),
  dutch: (
    <>
      Wil je precies grillen met een slimme vleesthermometer? Bestel hem{" "}
      <a
        href="https://armeator.com/yllebntc"
        target="_blank"
        rel="noopener noreferrer"
      >
        hier
      </a>
      . Gebruik kortingscode <strong>SANDERVANECK</strong> en krijg 10% korting!
    </>
  ),
};
