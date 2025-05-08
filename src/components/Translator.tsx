export const translateLabel = (label: string, language: string): string => {
  const translations: Record<string, Record<string, string>> = {
    calories: {
      english: "Calories",
      german: "Kalorien",
      spanish: "Calorías",
      italian: "Calorie",
    },
    proteins: {
      english: "Proteins",
      german: "Proteine",
      spanish: "Proteínas",
      italian: "Proteine",
    },
    saturatedFats: {
      english: "Saturated Fats",
      german: "Gesättigte Fette",
      spanish: "Grasas saturadas",
      italian: "Grassi saturi",
    },
    unsaturatedFats: {
      english: "Unsaturated Fats",
      german: "Ungesättigte Fette",
      spanish: "Grasas insaturadas",
      italian: "Grassi insaturi",
    },
    carbs: {
      english: "Carbs",
      german: "Kohlenhydrate",
      spanish: "Carbohidratos",
      italian: "Carboidrati",
    },
    preparationMethods: {
      english: "Preparation Methods",
      german: "Zubereitungsmethoden",
      spanish: "Métodos de preparación",
      italian: "Metodi di preparazione",
    },
    nutritionalValue: {
      english: "Nutritional Value",
      german: "Nährwert",
      spanish: "Valor nutricional",
      italian: "Valore nutrizionale",
    },
    selectABeefCut: {
      english: "Select a beef cut",
      german: "Wählen Sie einen Rindfleischschnitt",
      spanish: "Seleccione un corte de carne de res",
      italian: "Seleziona un taglio di manzo",
    },
    butcher: {
      english: "Butcher",
      german: "Metzger",
      spanish: "Carnicero",
      italian: "Macellaio",
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
    },
  };

  return (
    translations[label]?.[language] ?? translations[label]?.english ?? label
  );
};
