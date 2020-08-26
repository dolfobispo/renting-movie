
import { Product } from './product';

export class ProductItem{
    quantity: number;
    price: number;
    subTotal: number;
    product: Product;
    
    constructor( quantity: number, price: number, product: Product)
    {
        this.quantity = quantity;
        this.price = price;
        this.product = product;
        this.calcSubTotal();
    }
    calcSubTotal(): void{
        this.subTotal = this.price * this.quantity;
    }

}
