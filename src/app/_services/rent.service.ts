import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Rent } from '../_models/rent';

@Injectable({ providedIn: 'root' })
export class RentService {
    private rentSubject: BehaviorSubject<Rent>;
    public rent: Observable<Rent>;
    constructor(

    ) {
        const rent = new Rent();
        localStorage.setItem('rent', JSON.stringify(rent));
        this.rentSubject = new BehaviorSubject<Rent>(JSON.parse(localStorage.getItem('rent')));
        this.rent = this.rentSubject.asObservable();
    }

    setRent(rent: Rent): Observable<Rent>{
        localStorage.setItem('rent', JSON.stringify(rent));
        return this.rent;
    }
}
