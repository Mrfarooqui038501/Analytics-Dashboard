import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";   // ← named import works with Vite/ESM

// CSV export (unchanged)
function exportCSV(data, columns) {
  if (!data.length) return alert("Nothing to export");
  const header = columns.map(c => c.title).join(",");
  const rows   = data.map(r => columns.map(c => `"${(r[c.field] ?? "").toString().replace(/"/g, '""')}"`).join(","));
  const blob   = new Blob([[header, ...rows].join("\n")], { type: "text/csv" });
  const url    = URL.createObjectURL(blob);
  Object.assign(document.createElement("a"), { href: url, download: "users.csv" }).click();
  URL.revokeObjectURL(url);
}

// PDF export
function exportPDF(data, columns) {
  if (!columns.length) return alert("No columns defined");
  const doc = new jsPDF();
  autoTable(doc, {                          // ← call autoTable as a function
    head: [columns.map(c => c.title)],
    body: data.length ? data.map(r => columns.map(c => r[c.field] ?? "")) : [["-"]],
    styles: { fontSize: 8 },
    headStyles: { fillColor: [92, 110, 249] },
    margin: { top: 10 },
  });
  doc.save("users.pdf");
}

export default function ExportButtons({ data, columns }) {
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 7 }}>
      <button className="export-btn" onClick={() => exportCSV(data, columns)}>Export CSV</button>
      <button className="export-btn" onClick={() => exportPDF(data, columns)}>Export PDF</button>
    </div>
  );
}