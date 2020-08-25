import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Cart } from '../_models/Cart';



@Injectable({ providedIn: 'root' })
export class CartService {
    private cartSubject: BehaviorSubject<Cart>;
    public cart: Observable<Cart>;

    constructor(

    ) {
        const cart = {items: []};
        localStorage.setItem('cart', JSON.stringify(cart));
        this.cartSubject = new BehaviorSubject<Cart>(JSON.parse(localStorage.getItem('cart')));
        this.cart = this.cartSubject.asObservable();
    }

    public get cartValue(): Cart {
        return this.cartSubject.value;
    }

    addToCart(item): Observable<Cart>{
        const cart = this.cartValue;
        cart.items.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        return this.cart;
    }
    removeToCart(item): Observable<Cart>{
        this.cartValue.items =  this.cartValue.items.filter(i => item.id !== i.id);
        localStorage.setItem('cart', JSON.stringify(this.cartValue));
        return this.cart;
    }
    getCart(): Observable<Cart> {
       return this.cart;
    }
}
