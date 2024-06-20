import { CartItemCreateNestedManyWithoutProductsInput } from "./CartItemCreateNestedManyWithoutProductsInput";
import { InputJsonValue } from "../../types";

export type ProductCreateInput = {
  barcode?: string | null;
  cartItems?: CartItemCreateNestedManyWithoutProductsInput;
  description?: string | null;
  image?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  price?: number | null;
  stock?: number | null;
  variations?: InputJsonValue;
};
