export type Discount = {
  amount: number | null;
  code: string | null;
  createdAt: Date;
  expiryDate: Date | null;
  id: string;
  isActive: boolean | null;
  updatedAt: Date;
};
