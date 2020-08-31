import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Rent } from '../_models/rent';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
@Injectable({ providedIn: 'root' })
export class RentService {
    private rentSubject: BehaviorSubject<Rent>;
    public rent: Observable<Rent>;
    constructor(
        private http: HttpClient
    ) {
        this.init();
    }

    save( rent: Rent) {
        return this.http.post(`${environment.apiUrl}/rents`, rent);
    }
    init() {
        const obj = new Rent();
        this.rentSubject = new BehaviorSubject<Rent>(obj);
        this.rent = this.rentSubject.asObservable();
        return this.rent;
    }
}
