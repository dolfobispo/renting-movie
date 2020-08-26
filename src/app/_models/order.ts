import { ProductItem } from './product-item';
import { User } from './user';


export class Order{
    id: number;
    items: ProductItem[] = [];
    moment: string;
    total: number;
    rentStatus: number;
    client: User;
}
