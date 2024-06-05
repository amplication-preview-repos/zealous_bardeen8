import { SortOrder } from "../../util/SortOrder";

export type DoctorOrderByInput = {
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  patientId?: SortOrder;
  specialization?: SortOrder;
  updatedAt?: SortOrder;
};
