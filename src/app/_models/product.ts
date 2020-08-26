import { Stock } from './stock';

export class Product{
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    rent_price: number;
    stock: Stock;
}
