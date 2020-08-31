
import { Product } from './product';

export class ProductItem{
    quantity: number;
    price: number;
    product: Product;
    
    constructor( quantity: number, price: number, product: Product)
    {
        this.quantity = quantity;
        this.price = price;
        this.product = product;
    }
    getSubTotal(): number{
        return this.price * this.quantity;
    }

}
