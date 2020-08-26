import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OrderRoutingModule,
        SharedModule
    ],
    declarations: [
        LayoutComponent,
        OrderComponent
    ]
})
export class OrderModule { }
