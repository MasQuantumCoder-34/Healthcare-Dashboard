import React from "react";
import Layout from "../components/Layout";
import PatientCard from "../components/PatientCard";
import type { Patient } from "../components/PatientCard";

const mockPatients: Patient[] = [
  { id: 1, name: "Rahul Verma", age: 34, condition: "Diabetes" },
  { id: 2, name: "Priya Sharma", age: 29, condition: "Hypertension" },
  { id: 3, name: "Arun Kumar", age: 41, condition: "Asthma" },
];

const Patients: React.FC = () => {
  return (
    <Layout>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Patients</h1>
        <button className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-100">
          + Add Patient (coming next)
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockPatients.map((p) => (
          <PatientCard key={p.id} patient={p} />
        ))}
      </div>
    </Layout>
  );
};

export default Patients;
