import React, { useState, useEffect } from "react";

export default function DataTable({ data, columns, rowsPerPage = 7 }) {
  const [page, setPage] = useState(0);
  const [sortField, setSortField] = useState(columns[0]?.field);
  const [sortAsc, setSortAsc] = useState(true);
  const [pageInput, setPageInput] = useState("1"); 

  // Sort data based on current sortField and direction
  const sorted = React.useMemo(() => {
    if (!sortField) return data;
    return [...data].sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortAsc ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [data, sortField, sortAsc]);

  // Calculate total pages and paginated data for current page
  const totalPages = Math.max(Math.ceil(sorted.length / rowsPerPage), 1);
  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // Keep the page input in sync with current page (1-based)
  useEffect(() => {
    setPageInput((page + 1).toString());
  }, [page]);

  // Validate and update pageInput on user typing
  const handlePageInputChange = (e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      setPageInput(val);
    }
  };

  // When user presses Enter in input box, validate page number and change page if valid
  const handlePageInputKeyDown = (e) => {
    if (e.key === "Enter") {
      const pageNum = Number(pageInput);
      if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
        setPage(pageNum - 1);
      } else {
        setPageInput((page + 1).toString());
      }
    }
  };

  // Handle page change using Prev/Next buttons
  const handlePageChange = (newPage) => {
    if (newPage < 0 || newPage >= totalPages) return;
    setPage(newPage);
  };

  // Handle sorting when clicking the table headers
  const handleSort = (field) => {
    if (field === sortField) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
    setPage(0); // Reset to first page when sorting changes
  };

  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.field}
                onClick={() => handleSort(col.field)}
                style={{ cursor: "pointer", userSelect: "none" }}
                title="Click to sort"
              >
                {col.title}
                {sortField === col.field ? (sortAsc ? " ▲" : " ▼") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginated.length === 0 ? (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center", padding: "1rem" }}>
                No data found
              </td>
            </tr>
          ) : (
            paginated.map((row, i) => (
              <tr key={i}>
                {columns.map((col) => (
                  <td key={col.field}>{row[col.field]}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination controls with input box */}
      <div
        className="table-pagination"
        aria-label="Table Pagination"
        style={{ gap: 8, alignItems: "center", display: "flex" }}
      >
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 0} aria-label="Previous Page">
          Prev
        </button>

        <label style={{ fontWeight: "600" }}>
          Page{" "}
          <input
            type="text"
            value={pageInput}
            onChange={handlePageInputChange}
            onKeyDown={handlePageInputKeyDown}
            style={{
              width: "3.2rem",
              textAlign: "center",
              borderRadius: "6px",
              border: "1px solid #bbb",
              fontSize: "1rem",
              marginRight: "0.5rem",
              padding: "2px 6px",
            }}
            aria-label="Enter page number"
          />{" "}
          of {totalPages}
        </label>

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages - 1 || totalPages === 0}
          aria-label="Next Page"
        >
          Next
        </button>
      </div>
    </div>
  );
}
