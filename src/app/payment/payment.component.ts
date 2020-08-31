import { Component, OnInit } from '@angular/core';
import { RentService } from '../_services/rent.service';
import { Rent } from '../_models/rent';
import { AccountService, AlertService } from '../_services';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { PaymentMethod } from './payment-method.enums';
import { Router } from '@angular/router';
import { Payment } from '../_models/payment';
import { environment } from '../../environments/environment';

@Component({ templateUrl: 'payment.component.html', styleUrls: ['./style.css'] })
export class PaymentComponent implements OnInit {
    rent: Rent;
    dateFormControl: FormControl;
    paymentMethod = PaymentMethod;
    keys = Object.keys;
    constructor(
        private rentService: RentService,
        private formBuilder: FormBuilder,
        private alertService: AlertService,
        private router: Router) { }

    ngOnInit() {
        this.rentService.rent.subscribe(rent => this.rent = rent);
        this.checkCart();
        this.rent.payment = new Payment();
        this.dateFormControl = new FormControl(this.rent.returningDate);
    
    }
    selectOption(id) {
        this.rent.payment.paymentMethod = id;
      }
    onSubmit(){
        
        if (this.rent.payment.paymentMethod == null){
            this.alertService.error('Por favor, selecione a forma de pagamento.');
            return;
        }
        this.rentService.save(this.rent).subscribe(rent => {
            this.alertService.success('Pedido concluido com sucesso!');
            this.rentService.init();
            setTimeout(function(){ window.location.href = `${environment.baseUrl}`; }, 1000);
            },
        error => {
            this.alertService.error(error);
        });
    }

    redirect(router): void {
         
    }

    scrollToElement($element): void {
        $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }
    checkCart(){
        if (this.rent.items.length === 0){
            this.router.navigate(['rent', 'user-rent']);
        }
    }

}