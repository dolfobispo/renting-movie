import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { MovieComponent } from './movie.component';
import { AddEditComponent } from './add-edit.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: MovieComponent },
            { path: 'add', component: AddEditComponent },
            { path: 'edit/:id', component: AddEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedModule],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }