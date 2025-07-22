import { useNavigate } from "react-router-dom";

const champions = [
  "darius",
  "fiora",
  "gangplank",
  "teemo",
  "tryndamere"
//pegar dinamicamente
];

export default function HomePage() {
  const navigate = useNavigate();

  const handleSelect = (e) => {
    const champ = e.target.value;
    if (champ) {
      navigate(`/matchup/${champ}`);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-extrabold text-emerald-400 mb-8 drop-shadow">
        Mono Zac Guide
      </h1>

      <p className="mb-4 text-gray-300">
        Selecione um campeão inimigo para ver a build e runas específicas
      </p>

      <select
        onChange={handleSelect}
        defaultValue=""
        className="bg-zinc-800 text-white px-6 py-3 rounded-lg shadow-lg focus:outline-emerald-400 cursor-pointer"
      >
        <option value="" disabled>
          Escolha o campeão inimigo...
        </option>
        {champions.map((champ) => (
          <option key={champ} value={champ}>
            {champ.charAt(0).toUpperCase() + champ.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
