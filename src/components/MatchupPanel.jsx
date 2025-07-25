import RuneDisplay from "./RuneDisplay";
import ItemsDisplay from "./ItemsDisplay";
import SummonerSpellsDisplay from "./SummonerSpellsDisplay";
import SpellDisplay from "./SpellDisplay";
import ChampionInfo from "./ChampionInfo";

export default function MatchupPanel({ matchupData }) {
  return (
    <div className="flex flex-col gap-6">
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
    </div>
  );
}
