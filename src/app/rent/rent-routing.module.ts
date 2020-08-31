import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentComponent } from './rent.component';
import { LayoutComponent } from './layout.component';
import { PaymentComponent } from '../payment/payment.component';
import { UserRentComponent } from '../user-rent/user-rent.component';
import { UserRentModule } from '../user-rent/user-rent.module';
import { SharedModule } from '../shared/shared.module';
import { PaymentModule } from '../payment/payment.module';

const routes: Routes = [
    {
        path: '', component: LayoutComponent ,
        children: [
            { path: '', component: RentComponent },
            
            { path: 'user-rent', component: UserRentComponent },
            
            { path: 'user-rent/payment', component: PaymentComponent }
            
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes), UserRentModule, PaymentModule, SharedModule],
    exports: [RouterModule]
})
export class RentRoutingModule { }