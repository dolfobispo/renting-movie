import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';
import { Rent } from './_models/Rent';
import { RentService } from './_services/rent.service';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;
    rent: Rent;
    constructor(private accountService: AccountService, private rentService: RentService) {
        this.accountService.user.subscribe(x => this.user = x);
        this.rentService.rent.subscribe(rent => this.rent = rent);
    }

    logout() {
        this.accountService.logout();
    }
}