import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { DoctorListRelationFilter } from "../doctor/DoctorListRelationFilter";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { HospitalListRelationFilter } from "../hospital/HospitalListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DepartmentWhereInput = {
  doctor?: DoctorWhereUniqueInput;
  doctors?: DoctorListRelationFilter;
  hospital?: HospitalWhereUniqueInput;
  hospitals?: HospitalListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
