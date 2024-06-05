import { Department } from "../department/Department";

export type Hospital = {
  createdAt: Date;
  department?: Department | null;
  departments?: Array<Department>;
  id: string;
  location: string | null;
  name: string | null;
  updatedAt: Date;
};
