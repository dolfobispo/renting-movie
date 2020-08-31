import { Component, OnInit } from '@angular/core';
import { RentService } from '../_services/rent.service';
import { AccountService, AlertService } from '../_services';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { Rent } from '../_models/rent';

@Component({ templateUrl: 'user-rent.component.html', styleUrls: ['./style.css'] })
export class UserRentComponent implements OnInit {
    formSearch: FormGroup;
    form: FormGroup;
    submitted = false;
    redoSearch = false;
    rent: Rent;
    constructor(
        private rentService: RentService,
        private userService: AccountService,
        private formBuilder: FormBuilder,
        private alertService: AlertService,
        private router: Router) { }

    ngOnInit() {
        this.rentService.rent.subscribe(rent => this.rent = rent);
        this.checkCart();
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
    
    enableSearch(){
        this.redoSearch = !this.redoSearch;
        this.fs.cpf.enable();
        this.f.name.setValue('');
        this.f.lastName.setValue('');
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
                this.rent.client = user;
                this.fs.cpf.disable();
                this.redoSearch = !this.redoSearch;
                this.f.name.setValue(user.name);
                this.f.lastName.setValue(user.lastName);
            },
            error => {
                this.alertService.error(error);
            });

    }
    checkCart(){
        if (this.rent.items.length === 0){
            this.router.navigate(['rent']);
        }else if (this.rent.client !== null){
           this.router.navigate(['rent', 'user-rent', 'payment']);
        }

    }
    checkout(): void {
       this.router.navigate(['rent', 'user-rent', 'payment']);
    }

}