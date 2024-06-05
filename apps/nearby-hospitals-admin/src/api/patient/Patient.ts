import { Doctor } from "../doctor/Doctor";

export type Patient = {
  assignedDoctor: string | null;
  createdAt: Date;
  disease: string | null;
  doctors?: Array<Doctor>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
