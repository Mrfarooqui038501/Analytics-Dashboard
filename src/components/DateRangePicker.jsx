import React from "react";

export default function DateRangePicker({ from, to, setFrom, setTo }) {
  return (
    <div className="date-range-picker">
      <label>
        <span>From</span>
        <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
      </label>
      <label>
        <span>To</span>
        <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
      </label>
    </div>
  );
}
