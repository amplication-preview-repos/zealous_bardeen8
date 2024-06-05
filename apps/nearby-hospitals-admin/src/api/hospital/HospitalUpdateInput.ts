import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { DepartmentUpdateManyWithoutHospitalsInput } from "./DepartmentUpdateManyWithoutHospitalsInput";

export type HospitalUpdateInput = {
  department?: DepartmentWhereUniqueInput | null;
  departments?: DepartmentUpdateManyWithoutHospitalsInput;
  location?: string | null;
  name?: string | null;
};
