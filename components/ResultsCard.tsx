import AISummary from "./AISummary";

interface Props {
  recommendation: string;
  savings: number;
  summary: string;
}

export default function ResultsCard({
  recommendation,
  savings,
  summary,
}: Props) {

  return (
    <div className="mt-10 bg-black border border-zinc-700 p-8 rounded-3xl">

      <div className="flex items-center justify-between flex-wrap gap-4">

        <div>
          <p className="text-zinc-400 text-sm">
            MONTHLY SAVINGS
          </p>

          <h3 className="text-5xl font-bold text-green-400 mt-2">
            ${savings}
          </h3>
        </div>

        <div>
          <p className="text-zinc-400 text-sm">
            YEARLY SAVINGS
          </p>

          <h3 className="text-5xl font-bold text-green-400 mt-2">
            ${savings * 12}
          </h3>
        </div>

      </div>

      <div className="mt-8 border-t border-zinc-800 pt-6">

        <h4 className="text-2xl font-bold mb-4">
          Recommendation
        </h4>

        <p className="text-lg text-gray-300">
          {recommendation}
        </p>

      </div>

      <AISummary summary={summary} />

    </div>
  );
}