"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import ResultsCard from "@/components/ResultsCard";
import { generateAudit } from "@/lib/auditEngine";
import EmailCapture from "@/components/EmailCapture";

export default function Home() {

  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [seats, setSeats] = useState("");
  const [useCase, setUseCase] = useState("");

  const [recommendation, setRecommendation] = useState("");
  const [savings, setSavings] = useState(0);
  const [summary, setSummary] = useState("");

  useEffect(() => {

    const savedTool = localStorage.getItem("tool");
    const savedPlan = localStorage.getItem("plan");
    const savedSpend = localStorage.getItem("spend");
    const savedSeats = localStorage.getItem("seats");
    const savedUseCase = localStorage.getItem("useCase");

    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedTool) setTool(savedTool);
    if (savedPlan) setPlan(savedPlan);
    if (savedSpend) setSpend(savedSpend);
    if (savedSeats) setSeats(savedSeats);
    if (savedUseCase) setUseCase(savedUseCase);

  }, []);

  const handleAudit = () => {

    const result = generateAudit(
      tool,
      plan,
      Number(seats)
    );

    setRecommendation(result.recommendation);
    setSavings(result.savings);

    setSummary(
      `Your company may save around $${result.savings} monthly by optimizing your ${tool} subscription strategy.`
    );
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <Hero />

      <section className="max-w-3xl mx-auto mt-24 bg-zinc-900 p-8 rounded-3xl border border-zinc-800">

        <h2 className="text-4xl font-bold mb-8">
          AI Spend Details
        </h2>

        <div className="grid gap-6">

          <select
            value={tool}
            onChange={(e) => {
              setTool(e.target.value);
              localStorage.setItem("tool", e.target.value);
            }}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700"
          >
            <option value="">Select AI Tool</option>
            <option>ChatGPT</option>
            <option>Claude</option>
            <option>Cursor</option>
            <option>Copilot</option>
            <option>Gemini</option>
          </select>

          <select
            value={plan}
            onChange={(e) => {
              setPlan(e.target.value);
              localStorage.setItem("plan", e.target.value);
            }}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700"
          >
            <option value="">Select Plan</option>

            <option>Free</option>
            <option>Plus</option>
            <option>Pro</option>
            <option>Team</option>
            <option>Business</option>
            <option>Enterprise</option>

          </select>

          <input
            type="number"
            placeholder="Monthly Spend"
            value={spend}
            onChange={(e) => {
              setSpend(e.target.value);
              localStorage.setItem("spend", e.target.value);
            }}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700"
          />

          <input
            type="number"
            placeholder="Number of Seats"
            value={seats}
            onChange={(e) => {
              setSeats(e.target.value);
              localStorage.setItem("seats", e.target.value);
            }}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700"
          />

          <select
            value={useCase}
            onChange={(e) => {
              setUseCase(e.target.value);
              localStorage.setItem("useCase", e.target.value);
            }}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700"
          >
            <option value="">Primary Use Case</option>

            <option>Coding</option>
            <option>Writing</option>
            <option>Research</option>
            <option>Data Analysis</option>

          </select>

          <button
            onClick={handleAudit}
            className="bg-white text-black py-4 rounded-xl font-semibold"
          >
            Generate Audit
          </button>

        </div>
        {recommendation && (
  <>
    <ResultsCard
      recommendation={recommendation}
      savings={savings}
      summary={summary}
    />

    <EmailCapture />
  </>
)}

        {recommendation && (
          <ResultsCard
            recommendation={recommendation}
            savings={savings}
            summary={summary}
          />
        )}

      </section>

    </main>
  );
}