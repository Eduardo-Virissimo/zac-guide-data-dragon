import { useEffect, useState } from "react";
import LaneSelector from "./components/LaneSelector";
import MatchupSelector from "./components/MatchupSelector";
import RuneDisplay from "./components/RuneDisplay";
import ItemsDisplay from "./components/ItemsDisplay";
import ChampionInfo from "./components/ChampionInfo";
import SpellDisplay from "./components/SpellDisplay";

import TextPressure from "./blocks/TextAnimations/TextPressure/TextPressure"; // ajuste o caminho conforme necessário
import { getZacData } from "./data/zacData";

export default function App() {
  const [zacData, setZacData] = useState(null);
  const [selectedLane, setSelectedLane] = useState("top");
  const [selectedMatchup, setSelectedMatchup] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await getZacData();
      setZacData(data);
    };
    loadData();
  }, []);

  if (!zacData) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <p className="text-emerald-400 text-xl animate-pulse">Carregando dados do Zac...</p>
      </div>
    );
  }

  const lanes = Object.keys(zacData);
  const matchups = zacData[selectedLane].matchups;
  const matchupData = selectedMatchup ? matchups[selectedMatchup] : null;

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Substituindo o título com TextPressure */}
        <div className="w-full max-w-4xl h-[200px] mx-auto mb-12 flex items-center justify-center">
          <TextPressure
            text="Mono Zac Guide"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#34d399" // emerald-400
            strokeColor="#000000"
            minFontSize={36}
          />
        </div>

        <LaneSelector
          lanes={lanes}
          selectedLane={selectedLane}
          onSelectLane={(lane) => {
            setSelectedLane(lane);
            setSelectedMatchup(null);
          }}
        />

        {selectedLane && (
          <MatchupSelector
            matchups={matchups}
            selectedMatchup={selectedMatchup}
            onSelectMatchup={setSelectedMatchup}
          />
        )}

        {matchupData && (
          <>
            <RuneDisplay runes={matchupData.runes} />
            <ItemsDisplay items={matchupData.items} />
            <SpellDisplay spells={matchupData.spells} skillOrder={matchupData.skillOrder} />
            <ChampionInfo
              championName={matchupData.championName}
              description={matchupData.description}
            />
          </>
        )}

        {!selectedMatchup && (
          <p className="text-center text-gray-400 mt-16 text-lg">
            Selecione um campeão inimigo para ver a build e runas.
          </p>
        )}
      </div>
    </div>
  );
}
