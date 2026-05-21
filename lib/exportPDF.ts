import jsPDF from "jspdf";

export function exportAuditPDF(
  recommendation: string,
  savings: number,
  summary: string
) {

  const doc = new jsPDF();

  doc.setFontSize(22);

  doc.text("AI Spend Audit Report", 20, 20);

  doc.setFontSize(14);

  doc.text(
    `Monthly Savings: $${savings}`,
    20,
    50
  );

  doc.text(
    `Yearly Savings: $${savings * 12}`,
    20,
    70
  );

  doc.text(
    `Recommendation: ${recommendation}`,
    20,
    100
  );

  doc.text(
    summary,
    20,
    130,
    {
      maxWidth: 160,
    }
  );

  doc.save("audit-report.pdf");
}