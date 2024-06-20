import { CartItem } from "../cartItem/CartItem";
import { Order } from "../order/Order";
import { User } from "../user/User";

export type Cart = {
  cartItems?: Array<CartItem>;
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
