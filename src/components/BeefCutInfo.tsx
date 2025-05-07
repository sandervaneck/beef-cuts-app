import React from "react";
import { beefCuts } from "../beefcuts";

interface Props {
  selectedId: string | null;
  language: "english" | "french" | "italian" | "spanish" | "german";
}

const BeefCutInfo: React.FC<Props> = ({ selectedId, language }) => {
  const cut = beefCuts.find((c) => c.id === selectedId);

  if (!cut) return <div>Select a beef cut</div>;

  return (
    <div className="cut-card">
      <h2 className="cut-name">{cut.name[language]}</h2>
      <ul className="nutrition">
        <li>
          <strong>{caloriesForLanguage(language)}:</strong> {cut.nutrition.kcal}{" "}
          kcal
        </li>
        <li>
          <strong>Protein:</strong> {cut.nutrition.protein} g
        </li>
        <li>
          <strong>Saturated Fats:</strong> {cut.nutrition.saturatedFats} g
        </li>
        <li>
          <strong>Unsaturated Fats:</strong> {cut.nutrition.unsaturatedFats} g
        </li>
        <li>
          <strong>Carbohydrates:</strong> {cut.nutrition.carbs} g
        </li>
      </ul>
      <div className="prep">
        <h4>Preparation Methods:</h4>
        <ul>
          {cut.preparation.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BeefCutInfo;

const caloriesForLanguage = (language: string) => {
  switch (language) {
    case "english":
      return "Calories";
    case "german":
      return "Kalorieen";
    case "spanish":
      return "Calorias";
    case "italian":
      return "Calori";
    default:
      return "Calories";
  }
};
