import { PermissionType } from "./permission.type";

export interface RoleType {
  id: number;
  name: string;
  descriptions: string;
  code: string;
  permissions: PermissionType[];
}
