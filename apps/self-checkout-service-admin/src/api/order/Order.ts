import { Cart } from "../cart/Cart";

export type Order = {
  cart?: Cart | null;
  createdAt: Date;
  id: string;
  paymentMethod: string | null;
  updatedAt: Date;
};
