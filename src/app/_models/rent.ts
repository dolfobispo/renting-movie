import { ProductItem } from './product-item';
import { User } from './user';


export class Rent{
    id: number;
    items: ProductItem[] = [];
    moment: string;
    rentStatus: number;
    client: User;
    rentingDate: Date;
    returningDate: Date;
}
