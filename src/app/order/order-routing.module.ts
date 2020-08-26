import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { LayoutComponent } from './layout.component';
import { UserOrderModule } from '../user-order/user-order.module';
import { UserOrderComponent } from '../user-order/user-order.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent ,
        children: [
            { path: '', component: OrderComponent },
            
            { path: 'user-order', component: UserOrderComponent }
            /*
            { path: 'user/payment', component: AddEditComponent }
            */
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes), UserOrderModule],
    exports: [RouterModule]
})
export class OrderRoutingModule { }
