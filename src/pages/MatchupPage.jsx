import { useParams } from "react-router-dom";
import { matchups } from "../data/matchups";
import RuneDisplay from "../components/RuneDisplay";
import Items from "../components/ItemsDisplay";

export default function MatchupPage() {
  const { enemy } = useParams();
  const data = matchups[enemy];

  if (!data) {
    return <p className="text-center text-red-500 text-xl mt-10">Matchup não encontrado.</p>;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-emerald-400 mb-6 text-center">
          Zac vs {enemy.charAt(0).toUpperCase() + enemy.slice(1)}
        </h1>

        <section className="bg-zinc-900 rounded-xl p-6 mb-6 shadow">
          <RuneDisplay runes={data.runes} />
        </section>

        <section className="bg-zinc-900 rounded-xl p-6 shadow">
          <Items items={data.items} />
        </section>
      </div>
    </div>
  );
}
