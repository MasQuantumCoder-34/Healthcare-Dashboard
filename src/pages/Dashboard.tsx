import React from "react";
import Layout from "../components/Layout";

const Card: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div className="rounded-2xl border bg-white p-4 shadow-sm">
    <div className="text-sm text-gray-500">{title}</div>
    <div className="mt-2 text-2xl font-semibold">{value}</div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <h1 className="mb-4 text-2xl font-semibold">Dashboard</h1>
      <h1 className="text-4xl text-red-500 font-bold underline">
  Tailwind Test
</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card title="Total Patients" value="128" />
        <Card title="Appointments Today" value="26" />
        <Card title="Critical Cases" value="4" />
      </div>

      <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-lg font-medium">Overview</h2>
        <p className="text-sm text-gray-600">
          Charts & insights will appear here (we’ll add Recharts next).
        </p>
      </div>
    </Layout>
  );
};

export default Dashboard;
