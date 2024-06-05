import { Department } from "../department/Department";
import { Patient } from "../patient/Patient";

export type Doctor = {
  createdAt: Date;
  department?: Department | null;
  departments?: Array<Department>;
  id: string;
  name: string | null;
  patient?: Patient | null;
  specialization: string | null;
  updatedAt: Date;
};
