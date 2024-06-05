import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { DepartmentUpdateManyWithoutDoctorsInput } from "./DepartmentUpdateManyWithoutDoctorsInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type DoctorUpdateInput = {
  department?: DepartmentWhereUniqueInput | null;
  departments?: DepartmentUpdateManyWithoutDoctorsInput;
  name?: string | null;
  patient?: PatientWhereUniqueInput | null;
  specialization?: string | null;
};
