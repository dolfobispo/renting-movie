import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaymentComponent } from './payment.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [SharedModule],
    declarations: [
        PaymentComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaymentModule { }
