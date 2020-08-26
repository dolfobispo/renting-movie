import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { OrderService } from '../_services/order.service';
import { Order } from '../_models/order';

@Component({ templateUrl: 'order-list.component.html', styleUrls: ['./style.css'] })
export class OrderComponent implements OnInit {
    order: Order;
    constructor(private orderService: OrderService) {}

    ngOnInit() {
       
        this.order = this.orderService.orderValue;
    }
    
    getTotal(): number{
        const taxa = 0; // apenas como exemplo
        return this.getSubTotal() + taxa;
    }
    getSubTotal(): number{
        let subTotal = 0;
        this.order.items.forEach(item => subTotal += item.subTotal);
        return subTotal;
    }
    addToOrder(Product): void{
        this.orderService.addToOrder(Product);
    }
    removeToOrder(Product): void{
        this.order = this.orderService.removeToOrder(Product);
    }

}