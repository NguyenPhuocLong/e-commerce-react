import { UserType } from "./user.type";

export interface AuthResponse {
  access_token: string;
  user: UserType;
}
