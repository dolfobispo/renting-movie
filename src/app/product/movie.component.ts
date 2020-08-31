import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { RentService } from '../_services/rent.service';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';
import { ProductItem } from '../_models/product-item';


@Component({ templateUrl: 'movie-list.component.html', styleUrls: ['./style.css'] })
export class MovieComponent implements OnInit {
    products = null;
    rent = null;
    quantity = 1;
    filteredProducts: Product[] = [];
    _filterBy: string;
    constructor(private productservice: ProductService, private rentService: RentService) {}
    
    ngOnInit() {
        this.productservice.getAll()
            .pipe(first())
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = products;
            });
        this.rentService.rent.subscribe(rent => this.rent = rent);
    }
    addItemToRent(product): void{
        const item = new ProductItem(this.quantity, product.price, product);
        this.rent.items.push(item);
    }
    removeToRent(product): void{
        this.rent.items =  this.rent.items.filter(p => p.product.id  !== product.id );
    }
    productInRent(product): boolean{
        const list = this.rent.items.filter(item => item.product.id === product.id);
        return list.length > 0 ? true : false;
    }
    set filter(value: string){
        this._filterBy = value;
        this.filteredProducts = this.products.filter((product: Product) =>
        product.title.toLocaleLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }
}