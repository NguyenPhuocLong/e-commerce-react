import { RoleType } from "./role.type";

export interface UserType {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  address: number;
  avatar?: string | null;
  role: RoleType;
}
