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
      english: "Saturated Fats",
      german: "Gesättigte Fette",
      spanish: "Grasas saturadas",
      italian: "Grassi saturi",
      french: "Graisses saturées",
      portuguese: "Gorduras saturadas",
      dutch: "Verzadigde vetten",
    },
    unsaturatedFats: {
      english: "Unsaturated Fats",
      german: "Ungesättigte Fette",
      spanish: "Grasas insaturadas",
      italian: "Grassi insaturi",
      french: "Graisses insaturées",
      portuguese: "Gorduras insaturadas",
      dutch: "Onverzadigde vetten",
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
