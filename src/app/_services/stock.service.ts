import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Stock } from '../_models/stock';

@Injectable({ providedIn: 'root' })
export class StockService {
    private stockSubject: BehaviorSubject<Stock>;
    public stock: Observable<Stock>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.stockSubject = new BehaviorSubject<Stock>(JSON.parse(localStorage.getItem('stock')));
        this.stock = this.stockSubject.asObservable();
    }

    public get ProductValue(): Stock {
        return this.stockSubject.value;
    }

    getAll(): Observable<Stock[]>{
        return this.http.get<Stock[]>(`${environment.apiUrl}/stocks`);
    }

    getById(id: string): Observable<Stock> {
        return this.http.get<Stock>(`${environment.apiUrl}/stocks/${id}`);
    }

    /*
    update(id, params) {
        return this.http.put(`${environment.apiUrl}/Products/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id === this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }
    */

}
