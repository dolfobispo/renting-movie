import { Rent } from './rent';

export class User{
    id: string;
    name: string;
    lastName: string;
    email: string;
    orders: Rent[];
    token: string;
}
