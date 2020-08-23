import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Movie } from '../_models/movie';

@Injectable({ providedIn: 'root' })
export class MovieService {
    private movieSubject: BehaviorSubject<Movie>;
    public movie: Observable<Movie>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.movieSubject = new BehaviorSubject<Movie>(JSON.parse(localStorage.getItem('movie')));
        this.movie = this.movieSubject.asObservable();
    }

    public get movieValue(): Movie {
        return this.movieSubject.value;
    }

    getAll() {
        return this.http.get<Movie[]>(`${environment.apiUrl}/movies`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/movies/${id}`);
    }

    /*
    update(id, params) {
        return this.http.put(`${environment.apiUrl}/movies/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id === this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }
    */

}
