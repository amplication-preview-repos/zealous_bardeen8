import { DoctorUpdateManyWithoutPatientsInput } from "./DoctorUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  assignedDoctor?: string | null;
  disease?: string | null;
  doctors?: DoctorUpdateManyWithoutPatientsInput;
  name?: string | null;
};
