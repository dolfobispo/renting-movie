import { Component, OnInit } from '@angular/core';
import { OrderService } from '../_services/order.service';
import { Order } from '../_models/order';
import { AccountService, AlertService } from '../_services';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({ templateUrl: 'user-order.component.html', styleUrls: ['./style.css'] })
export class UserOrderComponent implements OnInit {
    formSearch: FormGroup;
    form: FormGroup;
    submitted = false;
    user: User;
    redoSearch = false;
    constructor(
        private orderService: OrderService,
        private userService: AccountService,
        private formBuilder: FormBuilder,
        private alertService: AlertService,
        private router: Router) {this.user = new User(); }

    ngOnInit() {
        this.formSearch = this.formBuilder.group({
            cpf: ['', [Validators.required, Validators.minLength(11),
            Validators.maxLength(11)]]
        });

        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            lastName: ['', Validators.required]
        });
    }
    get fs() { return this.formSearch.controls; }
    get f() { return this.form.controls; }
    
    addUserOrder(): void{

    }
    enableSearch(){
        this.redoSearch = !this.redoSearch;
        this.fs.cpf.enable();
        this.f.name.setValue('');
        this.f.lastName.setValue('');
        this.user = new User();
    }
    onSubmit(): User{
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.formSearch.invalid) {
            return;
        }
       
        this.userService.findUserByCpf(this.fs.cpf.value).subscribe(
            user => {
                this.user = user;
                this.fs.cpf.disable();
                this.redoSearch = !this.redoSearch;
                this.f.name.setValue(user.name);
                this.f.lastName.setValue(user.lastName);
            },
            error => {
                this.alertService.error(error);
                this.user = new User();
            });

    }
    checkout(){
        
       this.router.navigate(['order', 'user-order', 'payment']);
      
    }

}