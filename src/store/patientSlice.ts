import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Patient {
  id: number;
  name: string;
  age: number;
  condition: string;
}

interface PatientState {
  patients: Patient[];
}

const initialState: PatientState = {
  patients: [],
};

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    addPatient: (state, action: PayloadAction<Patient>) => {
      state.patients.push(action.payload);
    },
    removePatient: (state, action: PayloadAction<number>) => {
      state.patients = state.patients.filter(p => p.id !== action.payload);
    },
  },
});

export const { addPatient, removePatient } = patientSlice.actions;
export default patientSlice.reducer;
