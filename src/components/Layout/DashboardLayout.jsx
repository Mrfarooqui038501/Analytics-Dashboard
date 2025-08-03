import React, { useState, useEffect } from "react";
import {
  metrics as initialMetrics,
  revenueHistory as initialRevenue,
  campaignStats as initialCampaigns,
  userTableData as initialUsers,
} from "../../data/mockData";
import MetricCard from "../Cards/MetricCard";
import SimpleLineChart from "../Charts/LineChart";
import SimpleBarChart from "../Charts/BarChart";
import DonutChart from "../Charts/DonutChart";
import DataTable from "../Table/DataTable";
import DarkModeToggle from "../DarkModeToggle";
import useDarkMode from "../../hooks/useDarkMode";
import Skeleton from "../Skeleton";
import ExportButtons from "../ExportButtons";
import DateRangePicker from "../DateRangePicker";

export default function DashboardLayout() {
  const [dark, setDark] = useDarkMode();

  // State for real-time updating data
  const [metrics, setMetrics] = useState(initialMetrics);
  const [revenueHistory, setRevenueHistory] = useState(initialRevenue);
  const [campaignStats, setCampaignStats] = useState(initialCampaigns);
  const [users, setUsers] = useState(initialUsers);

  // Loading state to show skeletons initially
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Simulate real-time updates with interval
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((m) => {
          const randomDiff = (Math.random() * 2 - 1) * 0.01; // ±1%
          let newValue = m.value;
          if (m.value.startsWith("$")) {
            const num = parseFloat(m.value.replace(/[^\d.]+/g, "")) * (1 + randomDiff);
            newValue = `$${num.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
          } else if (m.value.includes("%")) {
            const num = parseFloat(m.value) * (1 + randomDiff);
            newValue = `${num.toFixed(1)}%`;
          } else if (!isNaN(Number(m.value.replace(/,/g, "")))) {
            const num = parseFloat(m.value.replace(/,/g, "")) * (1 + randomDiff);
            newValue = `${Math.round(num).toLocaleString()}`;
          }
          return { ...m, value: newValue };
        })
      );
      setRevenueHistory((prev) =>
        prev.map((v, i) =>
          i < prev.length - 1 ? v : { ...v, value: v.value + Math.floor(Math.random() * 200 - 100) }
        )
      );
      setCampaignStats((prev) =>
        prev.map((v) => ({
          ...v,
          value: v.value + Math.floor(Math.random() * 5 - 2),
        }))
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Date range filter state for users
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // Filter users by joined date according to date range
  const filteredUsers = users.filter((u) => {
    if (from && u.joined < from) return false;
    if (to && u.joined > to) return false;
    return true;
  });

  const columnsArr = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Plan", field: "plan" },
    { title: "Status", field: "status" },
    { title: "Joined", field: "joined" },
  ];

  if (loading) {
    // Show skeleton loaders while loading
    return (
      <div>
        <header>
          <Skeleton height={38} width="50%" />
        </header>
        <div className="metrics-cards">
          <Skeleton height={94} width="100%" count={4} />
        </div>
        <div className="charts-grid">
          <Skeleton height={230} width="100%" count={3} />
        </div>
        <Skeleton height={32} width="30%" />
        <Skeleton height={72} width="100%" count={7} />
      </div>
    );
  }

  return (
    <div className={`dashboard${dark ? " dark" : ""}`}>
      <header>
        <div className="brand">ADmyBRAND Insights</div>
        <div style={{ flex: 1 }} />
        <DarkModeToggle toggled={dark} onToggle={() => setDark((d) => !d)} />
      </header>

      {/* Metric Cards Section */}
      <section className="metrics-cards">
        {metrics.map((metric, idx) => (
          <MetricCard key={idx} {...metric} />
        ))}
      </section>

      {/* Charts Grid Section */}
      <section className="charts-grid">
        <SimpleLineChart data={revenueHistory} />
        <SimpleBarChart data={campaignStats} />
        <DonutChart data={campaignStats} />
      </section>

      {/* Users Table Section with date filter and exports on right */}
      <section>
        <div className="table-header-row">
          <h2 style={{ margin: 0 }}>Users</h2>
          <div className="table-header-controls">
            <DateRangePicker from={from} to={to} setFrom={setFrom} setTo={setTo} />
            <ExportButtons data={filteredUsers} columns={columnsArr} />
          </div>
        </div>

        <DataTable data={filteredUsers} columns={columnsArr} rowsPerPage={7} />
      </section>
    </div>
  );
}
