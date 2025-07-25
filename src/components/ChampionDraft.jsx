import { useEffect, useState, useMemo } from "react";
import LaneSelector from "../components/LaneSelector";
import RuneDisplay from "../components/RuneDisplay";
import ItemsDisplay from "../components/ItemsDisplay";
import SummonerSpellsDisplay from "../components/SummonerSpellsDisplay";
import SpellDisplay from "../components/SpellDisplay";
import ChampionInfo from "../components/ChampionInfo";
import { getZacData } from "../data/zacData";

export default function Campeoes() {
    const [zacData, setZacData] = useState(null);
    const [lanes, setLanes] = useState([]);
    const [selectedLane, setSelectedLane] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedChampion, setSelectedChampion] = useState(null);
    const [counter, setCounter] = useState(30);

    useEffect(() => {
        getZacData().then((data) => {
            setZacData(data);
            const availableLanes = Object.entries(data)
                .filter(([lane, laneData]) => laneData.matchups && Object.keys(laneData.matchups).length > 0)
                .map(([lane]) => lane);
            setLanes(availableLanes);
            setSelectedLane(availableLanes[0] || null);
        });
    }, []);

    useEffect(() => {
        if (counter === 0) {
            const resetTimeout = setTimeout(() => setCounter(30), 3000);
            return () => clearTimeout(resetTimeout);
        }
        const timer = setTimeout(() => setCounter((c) => c - 1), 1000);
        return () => clearTimeout(timer);
    }, [counter]);

    const champions = useMemo(() => {
        if (!zacData || !selectedLane) return [];
        return Object.entries(zacData[selectedLane].matchups).map(([id, val]) => ({
            id,
            displayName: val.championName,
            iconUrl: val.championIcon,
        }));
    }, [zacData, selectedLane]);

    const filteredChampions = useMemo(() => {
        const search = searchTerm.toLowerCase();
        return champions.filter(
            ({ displayName, id }) =>
                displayName.toLowerCase().includes(search) || id.toLowerCase().includes(search)
        );
    }, [champions, searchTerm]);

    const matchupData = useMemo(() => {
        if (!selectedChampion || !selectedLane || !zacData) return null;
        return zacData[selectedLane].matchups[selectedChampion] || null;
    }, [selectedChampion, selectedLane, zacData]);

    useEffect(() => {
        setSelectedChampion(null);
        setSearchTerm("");
    }, [selectedLane]);

    return (
        <div className="min-h-screen w-full bg-[#0A1428] text-[#C8AA6E] font-sans flex">
            {/* LADO ESQUERDO */}
            <div className="flex-[1.5] p-6 flex flex-col items-center justify-center gap-6">
                <h1 className="text-center text-2xl text-[#F0E6D2] uppercase tracking-widest font-semibold">
                    SELECIONE O SEU CAMPEÃO!
                </h1>

                <div className="flex flex-col items-center my-4">
                    <span
                        className={`text-4xl font-bold ${counter === 0
                            ? "animate-pulse text-[#F0E6D2]"
                            : counter <= 5
                                ? "animate-pulse text-[#FF4444]"
                                : "text-[#C8AA6E]"
                            }`}
                    >
                        {counter}
                    </span>
                    <div className="relative w-52 h-1 bg-[#091428cc] rounded overflow-hidden">
                        <div
                            className="absolute left-1/2 transform -translate-x-1/2 h-full bg-[#FF4444] transition-all duration-1000"
                            style={{ width: `${(counter / 30) * 200}px` }}
                        />
                    </div>
                </div>

                <div className="flex flex-grow min-h-[600px] p-4 bg-[#091428cc] rounded-lg items-stretch">
                    {/* Sua Equipe */}
                    <div className="w-56 flex flex-col items-center text-lg">
                        <h3 className="text-[#F0E6D2] text-base uppercase mb-3">Sua Equipe</h3>
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="flex items-center w-full my-3 p-3 rounded relative border-t border-[#C8AA6E]/50"
                            >
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#785A28] mr-3 flex items-center justify-center bg-[#1E2328]">
                                    {i === 0 && (
                                        <img
                                            src="https://ddragon.leagueoflegends.com/cdn/15.9.1/img/champion/Zac.png"
                                            alt="Zac"
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    )}
                                </div>
                                <p className="text-base text-[#F0E6D2]">{i === 0 ? "Você" : `Aliado ${i}`}</p>
                            </div>
                        ))}
                    </div>

                    {/* CENTRO */}
                    <div className="w-[640px]  flex flex-col items-center mx-6">
                        <div className="flex justify-between items-center flex-wrap gap-4 mb-5 w-full">
                            {/* Lane Selector - ocupa o máximo possível */}
                            <div className="flex flex-wrap gap-2 flex-1 min-w-[200px]">
                                <LaneSelector
                                    lanes={lanes}
                                    selectedLane={selectedLane}
                                    onSelectLane={(lane) =>
                                        setSelectedLane(lane === selectedLane ? null : lane)
                                    }
                                />
                            </div>

                            {/* Busca - tamanho fixo e alinhado à direita */}
                            <div className="relative w-[220px]">
                                <input
                                    type="text"
                                    placeholder="Buscar"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 py-2 bg-[#1E2328] border border-[#785A28] text-base text-[#F0E6D2] rounded"
                                />
                                <div className="absolute left-3 top-3 text-[#A09B8C]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>


                        {/* Grid de campeões */}
                        <div className="grid grid-cols-8 gap-4 p-6 bg-gray-700 border border-[#17313A] rounded max-h-[700px] overflow-y-auto w-full">
                            {filteredChampions.length === 0 ? (
                                <p className="col-span-8 text-center text-[#A09B8C] text-lg w-full max-w-[400px] mx-auto">
                                    Nenhum campeão disponível.
                                </p>
                            ) : (
                                filteredChampions.map((champ) => (
                                    <button
                                        key={champ.id}
                                        onClick={() => setSelectedChampion(champ.id)}
                                        className={`p-2 rounded hover:ring-4 ring-emerald-500 flex flex-col items-center ${selectedChampion === champ.id ? "ring-6 ring-emerald-400" : ""
                                            }`}
                                        aria-label={`Selecionar campeão ${champ.displayName}`}
                                    >
                                        <div className="w-14 h-14 rounded overflow-hidden border border-[#785A28] flex items-center justify-center bg-[#1E2328]">
                                            <img
                                                src={champ.iconUrl}
                                                alt={champ.displayName}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                        <p className="text-sm text-center mt-2 truncate">{champ.displayName}</p>
                                    </button>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Inimigos */}
                    <div className="w-56 flex flex-col items-center text-lg">
                        <h3 className="text-[#F0E6D2] text-base uppercase mb-3">Inimigos</h3>
                        {[...Array(5)].map((_, i) => {
                            const isFirst = i === 0 && matchupData;
                            return (
                                <div
                                    key={i}
                                    className="flex items-center w-full my-3 p-3 rounded relative border-t border-[#C8AA6E]/50"
                                >
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF4444] mr-3 flex items-center justify-center bg-[#1E2328]">
                                        {isFirst && (
                                            <img
                                                src={matchupData.championIcon}
                                                alt={matchupData.championName}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-base text-[#F0E6D2]">
                                            {isFirst ? matchupData.championName : `Inimigo ${i + 1}`}
                                        </p>
                                        {i === 0 && !matchupData && (
                                            <span className="text-xs text-[#A09B8C] mt-1">Escolhendo...</span>
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* LADO DIREITO: Painel de Build/Runas */}
            <aside className="w-[550px] bg-zinc-900 border-l border-zinc-700 p-6 overflow-y-auto h-screen">
                {matchupData ? (
                    <>
                        <section className="p-4 bg-zinc-800 rounded-lg border border-emerald-600 shadow">
                            <RuneDisplay runes={matchupData.runes} />
                        </section>

                        <section className="p-4 bg-zinc-800 rounded-lg border border-emerald-600 shadow flex flex-col md:flex-row md:gap-6">
                            <div className="md:flex-1">
                                <ItemsDisplay items={matchupData.items} />
                            </div>
                            <div className="md:flex-1 mt-4 md:mt-0">
                                <SummonerSpellsDisplay summonerSpells={matchupData.summonerSpells} />
                                <SpellDisplay spells={matchupData.spells} skillOrder={matchupData.skillOrder} />
                            </div>
                        </section>

                        <section className="p-4 bg-zinc-800 rounded-lg border border-emerald-600 shadow text-center">
                            <ChampionInfo
                                championName={matchupData.championName}
                                description={matchupData.description}
                            />
                        </section>
                    </>
                ) : (
                    <p className="text-gray-400 text-center mt-10">
                        Selecione um campeão inimigo para ver as runas e builds.
                    </p>
                )}
            </aside>
        </div>
    );
}
