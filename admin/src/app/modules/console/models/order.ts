export class Order {
  _id!: string;
  shippingInfo!: {};
  paymentInfo!: {};
  user!: {};
  orderItems!: {};
  paidAt!: Date;
  totalPrice!: number;
  totalPriceAfterDiscount!: number;
  orderStatus!: string;
}
