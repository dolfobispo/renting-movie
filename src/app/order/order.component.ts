import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { OrderService } from '../_services/order.service';
import { Order } from '../_models/order';
import { FormControl } from '@angular/forms';

@Component({ templateUrl: 'order-list.component.html', styleUrls: ['./style.css'] })
export class OrderComponent implements OnInit {
    order: Order;
    minDate: Date;
    dateFormControl: FormControl;

    constructor(private orderService: OrderService)
     {
        this.minDate = this.getStartingDate();
        this.dateFormControl = new FormControl(this.minDate);
    }

    ngOnInit() {
       
        this.order = this.orderService.orderValue;
    }
    getStartingDate(): Date {
        let date  = new Date();
        date = new Date(date.getTime() + (1000 * 60 * 60 * 24));
        date.setDate(date.getDate() + 1); // data de entrega padrão: 2 dias
        return date;
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