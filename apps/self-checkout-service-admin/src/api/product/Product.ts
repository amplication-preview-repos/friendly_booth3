import { CartItem } from "../cartItem/CartItem";
import { JsonValue } from "type-fest";

export type Product = {
  barcode: string | null;
  cartItems?: Array<CartItem>;
  createdAt: Date;
  description: string | null;
  id: string;
  image: string | null;
  isActive: boolean | null;
  name: string | null;
  price: number | null;
  stock: number | null;
  updatedAt: Date;
  variations: JsonValue;
};
