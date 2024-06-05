import { Doctor } from "../doctor/Doctor";
import { Hospital } from "../hospital/Hospital";

export type Department = {
  createdAt: Date;
  doctor?: Doctor | null;
  doctors?: Array<Doctor>;
  hospital?: Hospital | null;
  hospitals?: Array<Hospital>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
