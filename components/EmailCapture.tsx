"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function EmailCapture() {

  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSave = async () => {

    setLoading(true);

    const { error } = await supabase
      .from("leads")
      .insert([
        {
          email,
          company,
          role,
        },
      ]);

    setLoading(false);

    if (!error) {
      setSuccess(true);

      setEmail("");
      setCompany("");
      setRole("");
    }

    else {
      alert("Failed to save lead");
      console.error(error);
    }
  };

  return (
    <div className="mt-10 bg-zinc-950 border border-zinc-800 p-8 rounded-3xl">

      <h3 className="text-3xl font-bold mb-6">
        Save Full Audit Report
      </h3>

      <div className="grid gap-5">

        <input
          type="email"
          placeholder="Work Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-xl bg-black border border-zinc-700"
        />

        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-4 rounded-xl bg-black border border-zinc-700"
        />

        <input
          type="text"
          placeholder="Your Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-4 rounded-xl bg-black border border-zinc-700"
        />

        <button
          onClick={handleSave}
          className="bg-green-500 text-black py-4 rounded-xl font-bold"
        >
          {loading ? "Saving..." : "Save Report"}
        </button>

        {success && (
          <p className="text-green-400">
            Report saved successfully.
          </p>
        )}

      </div>

    </div>
  );
}