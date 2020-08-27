import { Component, OnInit } from '@angular/core';
import { OrderService } from '../_services/order.service';
import { Order } from '../_models/order';
import { AccountService, AlertService } from '../_services';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../_models/user';

@Component({ templateUrl: 'payment.component.html', styleUrls: ['./style.css'] })
export class PaymentComponent implements OnInit {
    
    constructor(
        private orderService: OrderService,
        private formBuilder: FormBuilder,
        private alertService: AlertService) { }

    ngOnInit() {
    }

}