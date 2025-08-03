import React from 'react';

export default function DarkModeToggle({ toggled, onToggle }) {
  return (
    <button className="dark-toggle" onClick={onToggle}>
      {toggled ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
