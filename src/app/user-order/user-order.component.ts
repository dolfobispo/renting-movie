import { Component, OnInit } from '@angular/core';
import { OrderService } from '../_services/order.service';
import { Order } from '../_models/order';
import { AccountService, AlertService } from '../_services';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../_models/user';

@Component({ templateUrl: 'user-order.component.html', styleUrls: ['./style.css'] })
export class UserOrderComponent implements OnInit {
    form: FormGroup;
    submitted = false;
    user: User;
    constructor(
        private orderService: OrderService,
        private userService: AccountService,
        private formBuilder: FormBuilder,
        private alertService: AlertService) {this.user = new User(); }

    ngOnInit() {
        this.form = this.formBuilder.group({
            cpf: ['', [Validators.required, Validators.minLength(11),
            Validators.maxLength(11)]]
        });

    }
    get f() { return this.form.controls; }
    addUserOrder(): void{

    }
    onSubmit(): User{
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
       
        this.userService.findUserByCpf(this.f.cpf.value).subscribe(
            user => {
                this.user = user;
                console.log(this.user);
            },
            error => {
                this.alertService.error(error);
            });

    }

}