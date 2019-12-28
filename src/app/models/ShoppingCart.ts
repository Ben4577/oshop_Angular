import { Product } from '../models/Products';

export class ShoppingCart {
    cartId: number = 0;
    products: Product[] = [];
    totalQuantity: number = 0;
}