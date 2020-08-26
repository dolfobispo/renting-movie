import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Order } from '../_models/order';
import { ProductItem } from '../_models/product-item';



@Injectable({ providedIn: 'root' })
export class OrderService {
    private orderSubject: BehaviorSubject<Order>;
    public order: Observable<Order>;
    constructor(

    ) {
        const order = new Order();
        localStorage.setItem('order', JSON.stringify(order));
        this.orderSubject = new BehaviorSubject<Order>(JSON.parse(localStorage.getItem('order')));
        this.order = this.orderSubject.asObservable();
    }

    public get orderValue(): Order {
        return this.orderSubject.value;
    }

    addToOrder(productItem: ProductItem): Order{
        this.orderValue.items.push(productItem);
        localStorage.setItem('order', JSON.stringify(this.orderValue));
        return this.orderValue;
    }
    
    findItem(productItem: ProductItem){
        this.orderValue.items.filter(p => productItem.product.id !== p.product.id);
    }
    removeToOrder(product): Order{
        this.orderValue.items =  this.orderValue.items.filter(p => p.product.id  !== product.id );
        localStorage.setItem('order', JSON.stringify(this.orderValue));
        return this.orderValue;
    }
}
