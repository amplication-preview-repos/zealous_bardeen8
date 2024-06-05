import { SortOrder } from "../../util/SortOrder";

export type DepartmentOrderByInput = {
  createdAt?: SortOrder;
  doctorId?: SortOrder;
  hospitalId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
