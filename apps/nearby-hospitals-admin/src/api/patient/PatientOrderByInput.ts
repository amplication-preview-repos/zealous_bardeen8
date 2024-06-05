import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  assignedDoctor?: SortOrder;
  createdAt?: SortOrder;
  disease?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
