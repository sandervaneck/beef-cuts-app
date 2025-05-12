import React from "react";
import { beefCuts } from "../beefcuts";
import { translateLabel } from "./Translator";
import BeefCutNutritionTable from "./NutritionTable";

interface Props {
  selectedCutId: string | null;
  language: "english" | "french" | "italian" | "spanish" | "german";
}

const BeefCutInfo: React.FC<Props> = ({ selectedCutId, language }) => {
  const cut = beefCuts.find((c) => c.id === selectedId);

  if (!cut) return <div>{translateLabel("selectABeefCut", language)}</div>;

  return (
    <div className="cut-card">
      <h2 className="cut-name">{cut.name[language]}</h2>
      <BeefCutNutritionTable selectedId={selectedCutId} language={language} />
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
