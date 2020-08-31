import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { RentService } from '../_services/rent.service';
import { Rent } from '../_models/rent';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
@Component({ templateUrl: 'rent-list.component.html', styleUrls: ['./style.css'] })
export class RentComponent implements OnInit {
    rent: Rent;
    dateFormControl: FormControl;
    minDate: Date;
    constructor(private rentService: RentService){

    }

    ngOnInit() {
        this.rentService.rent.subscribe(rent => this.rent = rent);
        this.minDate = new Date();
        this.minDate.setDate(this.minDate.getDate() + 2);
        this.updateSummary();
    }

    removeToRent(product): void{
        this.rent.items =  this.rent.items.filter(p => p.product.id  !== product.id );
    }
    updateSummary(): void{
        if (this.rent.returningDate == null){
            this.rent.rentingDate = new Date();
            this.rent.returningDate = this.minDate;
        }
        this.dateFormControl = new FormControl(this.rent.returningDate);
        this.dateFormControl.valueChanges.
        subscribe(selectedItem => this.rent.returningDate = selectedItem);
    }
}