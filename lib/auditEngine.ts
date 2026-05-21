import { AuditResult } from "@/types/audit";

export function generateAudit(
  tool: string,
  plan: string,
  seats: number
): AuditResult {

  let recommendation = "";
  let savings = 0;

  if (tool === "ChatGPT") {

    if (plan === "Team" && seats <= 2) {
      recommendation = "Switch to ChatGPT Plus";
      savings = 30;
    }

    else if (plan === "Enterprise") {
      recommendation = "Downgrade to ChatGPT Team";
      savings = 100;
    }

    else {
      recommendation = "Your ChatGPT usage looks optimized";
      savings = 10;
    }
  }

  else if (tool === "Claude") {

    if (plan === "Team" && seats <= 3) {
      recommendation = "Switch to Claude Pro";
      savings = 25;
    }

    else {
      recommendation = "Claude setup is reasonable";
      savings = 5;
    }
  }

  else if (tool === "Cursor") {

    if (plan === "Business" && seats <= 2) {
      recommendation = "Switch to Cursor Pro";
      savings = 20;
    }

    else {
      recommendation = "Cursor usage looks optimized";
      savings = 5;
    }
  }

  else {
    recommendation = "Tool optimization unavailable";
    savings = 0;
  }

  return {
    recommendation,
    savings,
  };
}