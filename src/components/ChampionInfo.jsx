export default function ChampionInfo({ championName, description }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-emerald-400">{championName}</h2>
      <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">{description}</p>
    </div>
  );
}
