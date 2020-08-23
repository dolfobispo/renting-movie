import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { MovieService } from '../_services';
import { Movie } from '../_models/movie';

@Component({ templateUrl: 'list.component.html', styleUrls: ['./style.css'] })
export class ListComponent implements OnInit {
    movies = null;
    filteredMovies: Movie[] = [];
    _filterBy: string;
    constructor(private movieService: MovieService) {}
    
    ngOnInit() {
        this.movieService.getAll()
            .pipe(first())
            .subscribe(movies => {
                this.movies = movies;
                this.filteredMovies = movies;
            });
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