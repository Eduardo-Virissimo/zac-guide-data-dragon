export default function ChampionInfo({ championName, description }) {
  return (
    <div className="max-w-xl mx-auto mt-8 text-center text-gray-300">
      <h2 className="text-xl font-semibold mb-2">{championName}</h2>
      <p>{description}</p>
    </div>
  );
}
