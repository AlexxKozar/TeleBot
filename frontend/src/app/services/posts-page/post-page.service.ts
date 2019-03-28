import {Injectable, EventEmitter, Output} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import PostModel from '../../models/post.model';

import { Store } from '@ngrx/store';
import * as rootReducer from '../../store/reducers';
import * as postsActions from '../../store/actions/posts';

@Injectable()
export class PostPageService {

  apiPath = 'http://localhost:3000/api/posts';
  error: any;
  posts: EventEmitter<Array<PostModel>> = new EventEmitter();

  constructor(
    private http: HttpClient,
    private store: Store<rootReducer.State>) {
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
    return this.http.get<PostModel[]>(this.apiPath)
      .pipe(catchError(this.handleError))
  }

  getPostsFromStore() {
    console.log('*******GET ALL POSTS FROM SERVER*******');
    this.store.dispatch(new postsActions.AddManyAsync());
  }

  putPost(post) {

    const body = {
      description: post.text,
      date: post.date + ' ' + post.time,
      status: 'waiting'
    };

    console.log('Putting post');
    console.log(body);

    return this.http.put<PostModel>(this.apiPath, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  removePosts(id) {
    const url = `${this.apiPath}/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

}
