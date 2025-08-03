import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

// CSV export function
function exportCSV(data, columns) {
  const header = columns.map(c => c.title).join(",");
  const rows = data.map(row =>
    columns.map(col => `"${row[col.field] || ""}"`).join(",")
  );
  const csv = [header, ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "users.csv";
  link.click();
  URL.revokeObjectURL(url);
}

// PDF export function with static imports
function exportPDF(data, columns) {
  try {
    const doc = new jsPDF();
    doc.autoTable({
      head: [columns.map((c) => c.title)],
      body: data.map((row) => columns.map((col) => row[col.field])),
      styles: { fontSize: 8 },
      headStyles: { fillColor: [92, 110, 249] }, 
    });
    doc.save("users.pdf");
  } catch (err) {
    console.error("Error generating PDF:", err);
  }
}

export default function ExportButtons({ data, columns }) {
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 7 }}>
      <button className="export-btn" onClick={() => exportCSV(data, columns)}>
        Export CSV
      </button>
      <button className="export-btn" onClick={() => exportPDF(data, columns)}>
        Export PDF
      </button>
    </div>
  );
}
