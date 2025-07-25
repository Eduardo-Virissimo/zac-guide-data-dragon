import React, { useEffect, useState } from "react";
import ChampionDraft from "../components/ChampionDraft";
import { getZacData } from "../data/zacData";

export default function ZacGuide() {
  const [zacData, setZacData] = useState(null);
  const [selectedLane, setSelectedLane] = useState(null);
  const [selectedMatchup, setSelectedMatchup] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getZacData();
      setZacData(data);
    })();
  }, []);

  if (!zacData) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white">
        <p className="text-xl animate-pulse text-emerald-400">Carregando dados do Zac...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <ChampionDraft
        zacData={zacData}
        selectedLane={selectedLane}
        setSelectedLane={setSelectedLane}
        selectedMatchup={selectedMatchup}
        setSelectedMatchup={setSelectedMatchup}
      />
    </div>
  );
}
