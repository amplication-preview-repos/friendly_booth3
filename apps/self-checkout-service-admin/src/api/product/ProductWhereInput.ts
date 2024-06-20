import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CartItemListRelationFilter } from "../cartItem/CartItemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ProductWhereInput = {
  barcode?: StringNullableFilter;
  cartItems?: CartItemListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  stock?: IntNullableFilter;
  variations?: JsonFilter;
};
