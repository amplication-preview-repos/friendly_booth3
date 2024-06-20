import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  barcode?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  stock?: SortOrder;
  updatedAt?: SortOrder;
  variations?: SortOrder;
};
