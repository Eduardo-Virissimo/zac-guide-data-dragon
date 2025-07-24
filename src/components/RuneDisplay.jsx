export default function RuneDisplay({ runes }) {
  if (!runes) return null;

  const renderRunes = (runesArray) =>
  runesArray.map(({ name, icon }) => (
    <div
      key={icon}
      className="flex flex-col items-center p-2 rounded-lg border border-transparent hover:border-emerald-500 transition"
    >
      <img src={icon} alt={name} className="w-12 h-12" />
      <span className="mt-1 text-sm text-center">{name}</span>
    </div>
  ));


  return (
    <div>
      <h2 className="text-2xl font-bold text-emerald-300 mb-4">Runas</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-emerald-400">Runa Primária: {runes.primaryTree}</h3>
        <div className="flex gap-4 justify-center flex-wrap">{renderRunes(runes.primaryRunes)}</div>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-emerald-400">Runa Secundária: {runes.secondaryTree}</h3>
        <div className="flex gap-4 justify-center flex-wrap">{renderRunes(runes.secondaryRunes)}</div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2 text-emerald-400">Fragmentos</h3>
        <div className="flex gap-4 justify-center">{renderRunes(runes.shards)}</div>
      </section>
    </div>
  );
}