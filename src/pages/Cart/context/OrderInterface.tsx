import { CartItemInterface } from '../CartInterface';

export interface PaymentOrderInterface {
  paymentCardType: string,
  paymentStatus: string,
  paymentType: string,
  transactionID: string,
}

export interface OrderInterface {
  payment: PaymentOrderInterface,
  products: [CartItemInterface],
  total: number,
}