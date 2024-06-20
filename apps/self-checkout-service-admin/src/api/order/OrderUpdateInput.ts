import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";

export type OrderUpdateInput = {
  cart?: CartWhereUniqueInput | null;
  paymentMethod?: string | null;
};
