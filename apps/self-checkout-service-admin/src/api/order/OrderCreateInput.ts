import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";

export type OrderCreateInput = {
  cart?: CartWhereUniqueInput | null;
  paymentMethod?: string | null;
};
