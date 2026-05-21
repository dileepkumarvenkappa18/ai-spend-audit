interface Props {
  summary: string;
}

export default function AISummary({ summary }: Props) {

  return (
    <div className="mt-8">

      <h4 className="text-2xl font-bold mb-4">
        AI Generated Summary
      </h4>

      <p className="text-gray-300 leading-8">
        {summary}
      </p>

    </div>
  );
}