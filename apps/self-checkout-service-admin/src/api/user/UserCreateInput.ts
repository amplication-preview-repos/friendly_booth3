import { CartCreateNestedManyWithoutUsersInput } from "./CartCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  carts?: CartCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  otp?: number | null;
  otpVerified?: boolean | null;
  password: string;
  phone?: string | null;
  roles: InputJsonValue;
  username: string;
};
