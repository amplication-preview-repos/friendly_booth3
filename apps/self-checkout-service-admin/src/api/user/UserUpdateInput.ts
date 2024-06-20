import { CartUpdateManyWithoutUsersInput } from "./CartUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  carts?: CartUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  otp?: number | null;
  otpVerified?: boolean | null;
  password?: string;
  phone?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
