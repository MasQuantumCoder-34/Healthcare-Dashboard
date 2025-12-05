import React from "react";

export type Patient = {
  id: number;
  name: string;
  age: number;
  condition: string;
};

const PatientCard: React.FC<{ patient: Patient }> = ({ patient }) => {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{patient.name}</h3>
        <span className="text-xs text-gray-500">ID: {patient.id}</span>
      </div>
      <div className="mt-2 text-sm text-gray-700">
        <p>Age: {patient.age}</p>
        <p>Condition: {patient.condition}</p>
      </div>
    </div>
  );
};

export default PatientCard;
