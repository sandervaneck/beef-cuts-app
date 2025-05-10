import React from "react";
import { translateLabel } from "./Translator";
import { beefCuts } from "../beefcuts";

type Props = {
  selectedId: string | null;
  language:
    | "english"
    | "french"
    | "italian"
    | "spanish"
    | "german"
    | "dutch"
    | "portuguese";
};

const BeefCutNutritionTable: React.FC<Props> = ({ selectedId, language }) => {
  const cut = beefCuts.find((c) => c.id === selectedId);

  if (!cut) return <div>{translateLabel("selectABeefCut", language)}</div>;

  return (
    <div className="nutrition-table-container">
      <table className="nutrition-table">
        <thead>
          <tr>
            <th>{translateLabel("calories", language)}</th>
            <th>{translateLabel("proteins", language)}</th>
            <th>{translateLabel("saturatedFats", language)}</th>
            <th>{translateLabel("unsaturatedFats", language)}</th>
            <th>{translateLabel("carbs", language)}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cut.nutrition.kcal} kcal</td>
            <td>{cut.nutrition.protein} g</td>
            <td>{cut.nutrition.saturatedFats} g</td>
            <td>{cut.nutrition.unsaturatedFats} g</td>
            <td>{cut.nutrition.carbs} g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BeefCutNutritionTable;
