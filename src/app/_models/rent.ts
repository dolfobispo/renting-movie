import { MovieItem } from './movie-item';

export class Rent{
    id: number;
    items: MovieItem[];
    moment: string;
    total: number;
    rentStatus: number;
}
