import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from './movie';

@Injectable()
export class MovieService {
  private moviesUrl = 'api/movies';  // URL to web api
  private moviesFavUrl = 'api/moviesFav';

  constructor(private http: Http) { }

  getMovies(): Promise<Movie[]> {
    return this.http.get(this.moviesUrl)
               .toPromise()
               .then(response => response.json() as Movie[])
               .catch(this.handleError);
  }

  getFavMovies(): Promise<Movie[]> {
    return this.http.get(this.moviesFavUrl)
               .toPromise()
               .then(response => response.json() as Movie[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
