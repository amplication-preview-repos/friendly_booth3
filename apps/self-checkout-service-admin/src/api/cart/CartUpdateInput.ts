import { CartItemUpdateManyWithoutCartsInput } from "./CartItemUpdateManyWithoutCartsInput";
import { OrderUpdateManyWithoutCartsInput } from "./OrderUpdateManyWithoutCartsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartUpdateInput = {
  cartItems?: CartItemUpdateManyWithoutCartsInput;
  orders?: OrderUpdateManyWithoutCartsInput;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
