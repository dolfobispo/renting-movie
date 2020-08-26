import { Order } from './order';


export class User{
    id: string;
    name: string;
    lastName: string;
    email: string;
    orders: Order[];
    token: string;
}
