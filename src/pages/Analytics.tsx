import React from "react";
import Layout from "../components/Layout";

const Analytics: React.FC = () => {
  return (
    <Layout>
      <h1 className="mb-4 text-2xl font-semibold">Analytics</h1>
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        Charts will go here (Recharts) — we’ll add line/bar charts next.
      </div>
    </Layout>
  );
};

export default Analytics;
