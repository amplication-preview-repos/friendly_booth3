import { Cart } from "../cart/Cart";
import { JsonValue } from "type-fest";

export type User = {
  carts?: Array<Cart>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  otp: number | null;
  otpVerified: boolean | null;
  phone: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
