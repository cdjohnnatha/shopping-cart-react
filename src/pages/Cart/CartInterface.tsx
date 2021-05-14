export interface CartItemInterface {
  productId: string,
  price: number,
  quantity: number,
};

export interface CartInterface {
  _id?: string,
  total: number,
  status: string,
  quantity: number,
  products: CartItemInterface[],
};
export interface CartItemsInterface {
  [id: string]: CartItemInterface;
};

export enum CreditCardInputOption {
  refusedCard = 'refusedCard',
  acceptedCard = 'refusedCard'
}

export interface CreditCardInterface { 
  paymentCard: string,
  paymentType: string,
  creditCardNumber: string
}