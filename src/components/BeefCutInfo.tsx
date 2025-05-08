import React from "react";
import { beefCuts } from "../beefcuts";
import { translateLabel } from "./Translator";

interface Props {
  selectedId: string | null;
  language: "english" | "french" | "italian" | "spanish" | "german";
}

const BeefCutInfo: React.FC<Props> = ({ selectedId, language }) => {
  const cut = beefCuts.find((c) => c.id === selectedId);

  if (!cut) return <div>{translateLabel("selectABeefCut", language)}</div>;

  return (
    <div className="cut-card">
      <h2 className="cut-name">{cut.name[language]}</h2>
      <ul className="nutrition">
        <h4>{translateLabel("nutritionalValue", language)}:</h4>
        <li>
          <strong>{translateLabel("calories", language)}:</strong>{" "}
          {cut.nutrition.kcal} kcal
        </li>
        <li>
          <strong>{translateLabel("proteins", language)}:</strong>{" "}
          {cut.nutrition.protein} g
        </li>
        <li>
          <strong>{translateLabel("saturatedFats", language)}:</strong>{" "}
          {cut.nutrition.saturatedFats} g
        </li>
        <li>
          <strong>{translateLabel("unsaturatedFats", language)}:</strong>{" "}
          {cut.nutrition.unsaturatedFats} g
        </li>
        <li>
          <strong>{translateLabel("carbs", language)}:</strong>{" "}
          {cut.nutrition.carbs} g
        </li>
      </ul>
      <div className="prep">
        <h4>{translateLabel("preparationMethods", language)}:</h4>
        <ul>
          {cut.preparation.map((p, i) => (
            <li key={i}>
              {p[language].split(/(?=\d+\.)/).map((segment, idx) => (
                <div key={idx}>{segment.trim()}</div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BeefCutInfo;
