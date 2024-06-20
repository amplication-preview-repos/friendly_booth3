import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "paymentMethod";

export const OrderTitle = (record: TOrder): string => {
  return record.paymentMethod?.toString() || String(record.id);
};
