import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { DepartmentCreateNestedManyWithoutHospitalsInput } from "./DepartmentCreateNestedManyWithoutHospitalsInput";

export type HospitalCreateInput = {
  department?: DepartmentWhereUniqueInput | null;
  departments?: DepartmentCreateNestedManyWithoutHospitalsInput;
  location?: string | null;
  name?: string | null;
};
