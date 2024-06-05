import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { DepartmentListRelationFilter } from "../department/DepartmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type DoctorWhereInput = {
  department?: DepartmentWhereUniqueInput;
  departments?: DepartmentListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
  specialization?: StringNullableFilter;
};
