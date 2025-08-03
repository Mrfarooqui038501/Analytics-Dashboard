import React from 'react';

export default function MetricCard({ title, value, icon, diff }) {
  const diffPositive = diff.startsWith('+');
  return (
    <div className="card metric-card">
      <div className="metric-card-icon">{icon}</div>
      <div className="metric-card-details">
        <div className="metric-card-title">{title}</div>
        <div className="metric-card-value">{value}</div>
        <div className={`metric-card-diff ${diffPositive ? 'pos' : 'neg'}`}>{diff}</div>
      </div>
    </div>
  );
}
