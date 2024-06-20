import { SortOrder } from "../../util/SortOrder";

export type DiscountOrderByInput = {
  amount?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  updatedAt?: SortOrder;
};
