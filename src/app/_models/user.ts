import { Rent } from './rent';


export class User{
    id: string;
    name: string;
    email: string;
    rents: Rent[];
    token: string;
}
