import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { DepartmentListRelationFilter } from "../department/DepartmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HospitalWhereInput = {
  department?: DepartmentWhereUniqueInput;
  departments?: DepartmentListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
};
