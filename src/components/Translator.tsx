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
