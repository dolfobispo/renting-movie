import { ProductItem } from './product-item';
import { User } from './user';
import { Payment } from './payment';


export class Rent{
    id: number;
    items: ProductItem[] = [];
    moment: string;
    rentStatus: number;
    client: User;
    rentingDate: Date;
    returningDate: Date;
    payment: Payment;
    fine = 2;

    getTaxes(): number {
        const difference_In_Time = this.returningDate.getTime() - this.rentingDate.getTime();
        const difference_In_Days = Math.ceil((difference_In_Time /
             (1000 * 3600 * 24) - 2));  // if the difference is only 2 days, so  the taxes is 0

        return difference_In_Days * this.fine; //  hardcode // 2 R$ by difference in days
    }

    getTotal(): number{
        return this.getSubTotal() + this.getTaxes();
    }
    getSubTotal(): number{
        let subTotal = 0;
        this.items.forEach(item => subTotal += item.getSubTotal());
        return subTotal;
    }
    constructor()
    {
        this.payment  = null;
        this.rentingDate = null;
        this.returningDate = null;
        this.moment = null;
        this.client = null;
        
    }
}
