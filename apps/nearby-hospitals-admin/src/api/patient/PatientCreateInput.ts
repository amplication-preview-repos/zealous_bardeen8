import { DoctorCreateNestedManyWithoutPatientsInput } from "./DoctorCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  assignedDoctor?: string | null;
  disease?: string | null;
  doctors?: DoctorCreateNestedManyWithoutPatientsInput;
  name?: string | null;
};
