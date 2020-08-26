import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { OrderService } from '../_services/order.service';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';
import { ProductItem } from '../_models/product-item';


@Component({ templateUrl: 'list.component.html', styleUrls: ['./style.css'] })
export class ListComponent implements OnInit {
    products = null;
    order = null;
    quantity = 1;
    filteredProducts: Product[] = [];
    _filterBy: string;
    constructor(private productservice: ProductService, private orderService: OrderService) {}
    
    ngOnInit() {
        this.productservice.getAll()
            .pipe(first())
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = products;
            });
        this.order = this.orderService.orderValue;
    }
    addToOrder(product): void{
        const item = new ProductItem(this.quantity, product.rent_price, product);
        this.orderService.addToOrder(item);
    }
    removeToOrder(product){
        this.order = this.orderService.removeToOrder(product);
    }
    productInOrder(product){
        const list = this.order.items.filter(item => item.product.id === product.id);
        return list.length > 0 ? true : false;
    }
    set filter(value: string){
        this._filterBy = value;
        this.filteredProducts = this.products.filter((product: Product) =>
        product.title.toLocaleLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }
}