import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { DepartmentCreateNestedManyWithoutDoctorsInput } from "./DepartmentCreateNestedManyWithoutDoctorsInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type DoctorCreateInput = {
  department?: DepartmentWhereUniqueInput | null;
  departments?: DepartmentCreateNestedManyWithoutDoctorsInput;
  name?: string | null;
  patient?: PatientWhereUniqueInput | null;
  specialization?: string | null;
};
