import { Component, OnInit } from '@angular/core';
import { RentService } from '../_services/rent.service';
import { Rent } from '../_models/rent';
import { AccountService, AlertService } from '../_services';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../_models/user';

@Component({ templateUrl: 'payment.component.html', styleUrls: ['./style.css'] })
export class PaymentComponent implements OnInit {
    
    constructor(
        private rentService: RentService,
        private formBuilder: FormBuilder,
        private alertService: AlertService) { }

    ngOnInit() {
    }

}