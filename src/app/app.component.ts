import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';
import { Cart } from './_models/Cart';
import { CartService } from './_services/cart.service';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;
    cart: Cart;
    constructor(private accountService: AccountService, private cartService: CartService) {
        this.accountService.user.subscribe(x => this.user = x);
        this.cartService.cart.subscribe(cart => this.cart = cart);
    }
    
    logout() {
        this.accountService.logout();
    }
}