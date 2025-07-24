export default function SummonerSpellsDisplay({ summonerSpells }) {
  if (!summonerSpells || summonerSpells.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-emerald-300 mb-4">Feitiços de Invocador</h2>
      <div className="flex justify-center gap-6 flex-wrap mb-8">
        {summonerSpells.map(({ id, name, icon }) => (
          <div key={id} className="flex flex-col items-center">
            <img src={icon} alt={name} className="w-14 h-14" />
            <span className="text-sm mt-1">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}