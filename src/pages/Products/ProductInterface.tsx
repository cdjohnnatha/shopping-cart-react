export interface ProductImagesInterface {
  path: string,
  tags: string,
  size: string,
  type: string,
};

export interface Currency {
  name: string,
  label: string
}

export interface ProductInterface {
  _id: string,
  name: string,
  quantityAvailable: number,
  maxQuantityPerCustomer: number,
  category: string,
  description: string,
  price: number,
  images: Array<ProductImagesInterface>;
  currency: Currency,
};