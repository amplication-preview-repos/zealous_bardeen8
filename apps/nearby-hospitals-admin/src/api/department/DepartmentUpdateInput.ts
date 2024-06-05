import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { DoctorUpdateManyWithoutDepartmentsInput } from "./DoctorUpdateManyWithoutDepartmentsInput";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { HospitalUpdateManyWithoutDepartmentsInput } from "./HospitalUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  doctor?: DoctorWhereUniqueInput | null;
  doctors?: DoctorUpdateManyWithoutDepartmentsInput;
  hospital?: HospitalWhereUniqueInput | null;
  hospitals?: HospitalUpdateManyWithoutDepartmentsInput;
  name?: string | null;
};
