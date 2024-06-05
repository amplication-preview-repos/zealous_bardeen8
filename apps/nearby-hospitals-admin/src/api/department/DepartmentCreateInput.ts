import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { DoctorCreateNestedManyWithoutDepartmentsInput } from "./DoctorCreateNestedManyWithoutDepartmentsInput";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { HospitalCreateNestedManyWithoutDepartmentsInput } from "./HospitalCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  doctor?: DoctorWhereUniqueInput | null;
  doctors?: DoctorCreateNestedManyWithoutDepartmentsInput;
  hospital?: HospitalWhereUniqueInput | null;
  hospitals?: HospitalCreateNestedManyWithoutDepartmentsInput;
  name?: string | null;
};
