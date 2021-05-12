export interface CartItemInterface {
  _id: string,
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