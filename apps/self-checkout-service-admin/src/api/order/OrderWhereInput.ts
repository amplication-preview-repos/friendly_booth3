import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrderWhereInput = {
  cart?: CartWhereUniqueInput;
  id?: StringFilter;
  paymentMethod?: StringNullableFilter;
};
