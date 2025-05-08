import React, { useEffect, useState } from "react";
import "./App.css";
import BeefCutsMap from "./components/BeefCutsMap";
import BeefCutInfo from "./components/BeefCutInfo";
import { translateLabel } from "./components/Translator";
import { useSearchParams } from "react-router";

const App: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const defaultLang = searchParams.get("lang") as
    | "english"
    | "french"
    | "italian"
    | "spanish"
    | "german"
    | null;

  const [language, setLanguage] = useState(defaultLang ?? "english");
  const [selectedCutId, setSelectedCutId] = useState<string | null>(null);

  useEffect(() => {
    setSearchParams({ lang: language });
  }, [language, setSearchParams]);

  return (
    <div className="app">
      <header className="header">
        <h1>{translateLabel("butcher", language)} van Eck</h1>
        <select
          className="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value as any)}
        >
          <option value="english">English</option>
          <option value="french">Français</option>
          <option value="italian">Italiano</option>
          <option value="spanish">Español</option>
          <option value="german">Deutsch</option>
        </select>
      </header>

      <div className="cut-container">
        <h5>{translateLabel("helperText", language)}:</h5>
        <BeefCutsMap onCutHover={setSelectedCutId} />
        <BeefCutInfo selectedId={selectedCutId} language={language} />
      </div>
    </div>
  );
};

export default App;
