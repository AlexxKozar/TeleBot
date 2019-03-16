import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable()
export class ConfigService {

  apiPath = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  getPosts() {
    return this.http.get<Object>(this.apiPath)
      .pipe(
        catchError(this.handleError)
      );
  }

  putPost(post) {

    const body = {
      description: post.text,
      images: post.images,
      date: post.date,
      status: "waiting"
    };

    console.log(body);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put<Object>(this.apiPath,body)
      .pipe(
        catchError(this.handleError)
      );
  }

  removePosts(id) {
    const url = `${this.apiPath}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

}
