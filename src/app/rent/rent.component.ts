import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { RentService } from '../_services/rent.service';
import { Rent } from '../_models/rent';
import { FormControl } from '@angular/forms';
import { DateUtil } from '../date-util/DateUtil';

@Component({ templateUrl: 'rent-list.component.html', styleUrls: ['./style.css'] })
export class RentComponent implements OnInit {
    rent: Rent;
    minDate: Date;
    dateFormControl: FormControl;
    taxa: number;

    constructor(private rentService: RentService)
     {
        this.minDate = DateUtil.getStartingDate();
        this.dateFormControl = new FormControl(this.minDate);
       ;
    }

    ngOnInit() {
        this.rentService.rent.subscribe(rent => this.rent = rent);
        console.log(this.rent);
    }
    calcTaxes(minDate, dateSelected): number{
        const difference_In_Time = dateSelected.getTime() - minDate.getTime();
        const difference_In_Days = Math.ceil(difference_In_Time / (1000 * 3600 * 24));
        this.taxa = difference_In_Days * 2;
        return  this.taxa; //  hardcode // 2 reais por dia de multa
    }
    getTotal(): number{
        return this.getSubTotal() + this.taxa;
    }
    getSubTotal(): number{
        let subTotal = 0;
        this.rent.items.forEach(item => subTotal += item.subTotal);
        return subTotal;
    }

    removeToRent(product): void{
        this.rent.items =  this.rent.items.filter(p => p.product.id  !== product.id );
        this.rentService.setRent(this.rent).subscribe(rent => this.rent = rent);
    }

}