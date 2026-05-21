"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  savings: number;
}

export default function SavingsChart({ savings }: Props) {

  const data = [
    {
      name: "Monthly",
      amount: savings,
    },
    {
      name: "Yearly",
      amount: savings * 12,
    },
  ];

  return (
    <div className="mt-10 bg-black border border-zinc-700 p-6 rounded-3xl">

      <h3 className="text-2xl font-bold mb-6">
        Savings Analytics
      </h3>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="amount"
              fill="#22c55e"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}