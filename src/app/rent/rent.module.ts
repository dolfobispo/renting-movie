import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RentComponent } from './rent.component';
import { RentRoutingModule } from './rent-routing.module';
import { LayoutComponent } from './layout.component';
import { PaymentModule } from '../payment/payment.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RentRoutingModule,
        SharedModule
    ],
    declarations: [
        LayoutComponent,
        RentComponent
    ]
})
export class RentModule { }
