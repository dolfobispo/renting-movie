import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Product } from '../_models/Product';

@Injectable({ providedIn: 'root' })
export class ProductService {
    private ProductSubject: BehaviorSubject<Product>;
    public Product: Observable<Product>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.ProductSubject = new BehaviorSubject<Product>(JSON.parse(localStorage.getItem('product')));
        this.Product = this.ProductSubject.asObservable();
    }

    public get ProductValue(): Product {
        return this.ProductSubject.value;
    }

    getAll() {
        return this.http.get<Product[]>(`${environment.apiUrl}/products`);
    }

    getById(id: string) {
        return this.http.get<Product>(`${environment.apiUrl}/products/${id}`);
    }
}
