import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { PostPageService } from '../components/posts-page/post-page.service';

import * as postsActions from '../store/actions/posts';

@Injectable()
export class PostsEffects {
    constructor(
        private actions$: Actions,
        private postsService: PostPageService
    ){}
    
    @Effect()
    loadPosts$ = this.actions$.pipe(
        ofType(postsActions.ADD_MANY_ASYNC),
        switchMap(() => {
            return this.postsService
                .getPosts()
                .pipe(
                    map(posts => new postsActions.AddOne(posts[0])),
                    catchError(error => of(new postsActions.AddManyAsync(error)))
                )
        })
    )
}