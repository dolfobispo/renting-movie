import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';
import { Order } from './_models/Order';
import { OrderService } from './_services/order.service';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;
    order: Order;
    constructor(private accountService: AccountService, private orderService: OrderService) {
        this.accountService.user.subscribe(x => this.user = x);
        this.order = this.orderService.orderValue;
    
    }

    logout() {
        this.accountService.logout();
    }
}