import { Stock } from './stock';

export class Product{
    id: number;
    title: string;
    overview: string;
    posterPath: string;
    price: number;
    stock: Stock;
}
