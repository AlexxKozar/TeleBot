import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
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
    loadPosts$ = this.actions$.ofType(postsActions.ADD_ONE).pipe(
        switchMap(() => {
            return this.postsService
                .getPosts()
                .pipe(
                    map(posts => new postsActions.AddOne(posts[0])),
                    catchError(error => of(new postsActions.AddOne(error)))
                )
        })
    )
}