// src/ZacGuide.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import LaneSelector from "../components/LaneSelector";
import MatchupSelector from "../components/MatchupSelector";
import RuneDisplay from "../components/RuneDisplay";
import ItemsDisplay from "../components/ItemsDisplay";
import ChampionInfo from "../components/ChampionInfo";
import SpellDisplay from "../components/SpellDisplay";
import TextPressure from "../blocks/TextAnimations/TextPressure/TextPressure";
import Aurora from "../blocks/Backgrounds/Aurora/Aurora";
import SummonerSpellsDisplay from "../components/SummonerSpellsDisplay";

import { getZacData } from "../data/zacData";

export default function ZacGuide() {
  const [zacData, setZacData] = useState(null);
  const [selectedLane, setSelectedLane] = useState("top");
  const [selectedMatchup, setSelectedMatchup] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getZacData();
      setZacData(data);
    })();
  }, []);

  if (!zacData) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <p className="text-emerald-400 text-xl animate-pulse">Carregando dados do Zac...</p>
      </div>
    );
  }

  const lanes = Object.keys(zacData);
  const matchups = zacData[selectedLane]?.matchups ?? {};
  const matchupData = selectedMatchup ? matchups[selectedMatchup] : null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative min-h-screen bg-zinc-950 text-white px-4 py-8 overflow-hidden"
    >
      {/* Aurora como background */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#6AE899", "#56FF95", "#7DFABE"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-12">
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

        {matchupData ? (
          <div className="flex flex-col gap-12">
            <section className="p-6 bg-zinc-800 rounded-lg shadow-md border border-emerald-600">
              <RuneDisplay runes={matchupData.runes} />
            </section>

            <section className="p-6 bg-zinc-800 rounded-lg shadow-md border border-emerald-600 flex flex-col md:flex-row md:gap-12">
              <div className="md:flex-1">
                <ItemsDisplay items={matchupData.items} />
              </div>
              <div className="md:flex-1 mt-8 md:mt-0">
                <SummonerSpellsDisplay summonerSpells={matchupData.summonerSpells} />
                <SpellDisplay spells={matchupData.spells} skillOrder={matchupData.skillOrder} />
              </div>
            </section>

            <section className="p-6 bg-zinc-800 rounded-lg shadow-md border border-emerald-600 text-center">
              <ChampionInfo
                championName={matchupData.championName}
                description={matchupData.description}
              />
            </section>
          </div>
        ) : (
          <p className="text-center text-gray-400 mt-16 text-lg">
            Selecione um campeão inimigo para ver a build e runas.
          </p>
        )}
      </div>
    </motion.div>
  );
}
