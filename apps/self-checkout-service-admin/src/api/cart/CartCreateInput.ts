import { CartItemCreateNestedManyWithoutCartsInput } from "./CartItemCreateNestedManyWithoutCartsInput";
import { OrderCreateNestedManyWithoutCartsInput } from "./OrderCreateNestedManyWithoutCartsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartCreateInput = {
  cartItems?: CartItemCreateNestedManyWithoutCartsInput;
  orders?: OrderCreateNestedManyWithoutCartsInput;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
