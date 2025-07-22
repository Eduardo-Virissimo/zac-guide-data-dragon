export default function MatchupSelector({ matchups, selectedMatchup, onSelectMatchup }) {
  return (
    <div className="max-w-xl mx-auto mb-8">
      <h2 className="text-2xl font-bold text-emerald-300 mb-6 text-center">Escolha o Campeão Inimigo</h2>
      
      <div className="flex flex-wrap justify-center gap-6">
        {Object.entries(matchups).map(([key, matchup]) => (
          <button
            key={key}
            onClick={() => onSelectMatchup(key)}
            className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition text-white w-32
              ${selectedMatchup === key
                ? 'border-emerald-400 bg-zinc-800'
                : 'border-transparent hover:border-emerald-500 hover:bg-zinc-700'}
            `}
          >
            <img
              src={matchup.championIcon}
              alt={matchup.championName}
              className="w-16 h-16 rounded-full object-cover shadow"
            />
            <span className="text-base font-semibold text-center">{matchup.championName}</span>

            {matchup.difficulty && (
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full mt-1
                  ${matchup.difficulty === "Fácil" && "bg-green-600"}
                  ${matchup.difficulty === "Médio" && "bg-yellow-600"}
                  ${matchup.difficulty === "Difícil" && "bg-red-600"}
                  ${matchup.difficulty === "Muito Difícil" && "bg-purple-700"}
                `}
              >
                {matchup.difficulty}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
