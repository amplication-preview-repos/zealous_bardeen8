import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DoctorListRelationFilter } from "../doctor/DoctorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type PatientWhereInput = {
  assignedDoctor?: StringNullableFilter;
  disease?: StringNullableFilter;
  doctors?: DoctorListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
