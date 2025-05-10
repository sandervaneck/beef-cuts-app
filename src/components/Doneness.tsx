import React from "react";
import { translateLabel } from "./Translator";

type Props = {
  language:
    | "english"
    | "french"
    | "italian"
    | "spanish"
    | "german"
    | "dutch"
    | "portuguese";
};

const SteakDonenessTable: React.FC<Props> = ({ language }) => {
  const donenessLevels = [
    { level: "Rare", temp: "50–52°C (122–125°F)" },
    { level: "Medium-Rare", temp: "54–57°C (130–135°F)" },
    { level: "Medium", temp: "60–63°C (140–145°F)" },
    { level: "Medium-Well", temp: "65–68°C (150–155°F)" },
    { level: "Well-Done", temp: "70°C+ (160°F+)" },
  ];

  return (
    <div className="nutrition-table-container">
      <table className="nutrition-table">
        <thead>
          <tr>
            <th>{translateLabel("donenessLevel", language)}</th>
            <th>{translateLabel("temperature", language)}</th>
          </tr>
        </thead>
        <tbody>
          {donenessLevels.map((d, index) => (
            <tr key={index}>
              <td>{translateLabel(d.level.toLowerCase(), language)}</td>
              <td>{d.temp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SteakDonenessTable;
