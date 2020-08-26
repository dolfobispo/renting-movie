import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserOrderComponent } from './user-order.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        UserOrderComponent
    ]
})
export class UserOrderModule { }
