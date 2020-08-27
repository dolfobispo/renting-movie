import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { LayoutComponent } from './layout.component';
import { UserOrderModule } from '../user-order/user-order.module';
import { UserOrderComponent } from '../user-order/user-order.component';
import { PaymentComponent } from '../payment/payment.component';
import { AngularMaterialModule } from '../angular-material.module';

const routes: Routes = [
    {
        path: '', component: LayoutComponent ,
        children: [
            { path: '', component: OrderComponent },
            
            { path: 'user-order', component: UserOrderComponent },
            
            { path: 'user-order/payment', component: PaymentComponent }
            
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes), UserOrderModule, AngularMaterialModule],
    exports: [RouterModule, AngularMaterialModule]
})
export class OrderRoutingModule { }
