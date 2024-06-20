import { CartItemUpdateManyWithoutProductsInput } from "./CartItemUpdateManyWithoutProductsInput";
import { InputJsonValue } from "../../types";

export type ProductUpdateInput = {
  barcode?: string | null;
  cartItems?: CartItemUpdateManyWithoutProductsInput;
  description?: string | null;
  image?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  price?: number | null;
  stock?: number | null;
  variations?: InputJsonValue;
};
