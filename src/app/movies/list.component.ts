import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { MovieService } from '../_services';
import { Movie } from '../_models/movie';
import { CartService } from '../_services/cart.service';

@Component({ templateUrl: 'list.component.html', styleUrls: ['./style.css'] })
export class ListComponent implements OnInit {
    movies = null;
    cart = null;
    filteredMovies: Movie[] = [];
    _filterBy: string;
    constructor(private movieService: MovieService, private cartservice: CartService) {}
    
    ngOnInit() {
        this.movieService.getAll()
            .pipe(first())
            .subscribe(movies => {
                this.movies = movies;
                this.filteredMovies = movies;
            });
        this.cartservice.getCart().subscribe(cart => this.cart = cart);
    }
    addToCart(movie): void{
        this.cartservice.addToCart(movie).subscribe(cart => this.cart = cart);
    }
    removeToCart(movie){
        this.cartservice.removeToCart(movie).subscribe(cart => this.cart = cart);
    }
    movieInCart(movie){
        const list = this.cart.items.filter(item => item.id === movie.id);
        console.log(list);
        return list.length > 0 ? true : false;
    }
    set filter(value: string){
        this._filterBy = value;
        this.filteredMovies = this.movies.filter((movie: Movie) =>
        movie.title.toLocaleLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }

    deleteUser(id: string) {
        const user = this.movies.find(x => x.id === id);
        user.isDeleting = true;
        /*
        this.movieService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.movies = this.movies.filter(x => x.id !== id) ;
            });
            */
    }
}