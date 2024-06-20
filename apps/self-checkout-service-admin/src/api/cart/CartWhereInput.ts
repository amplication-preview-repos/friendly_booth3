import { CartItemListRelationFilter } from "../cartItem/CartItemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartWhereInput = {
  cartItems?: CartItemListRelationFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  totalAmount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
