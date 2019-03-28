import { Component, OnInit } from '@angular/core';
import { PostPageService } from '../../services/posts-page/post-page.service';
import PostModel from '../../models/post.model';

import { Store } from '@ngrx/store';
import * as rootReducer from '../../store/reducers/';
import * as postsActions from '../../store/actions/posts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
})
export class PostsPageComponent implements OnInit {

  posts: Array<PostModel>;
  posts$: Observable<PostModel[]>;
  error: any;

  constructor(
    private postPageService: PostPageService,
    private store: Store<rootReducer.State>
    ) {
      this.posts$ = store.select(rootReducer.selectPosts);

      this.posts$.subscribe(posts => {
        this.posts = posts;
      });
      this.postPageService.getPostsFromStore();
    }


  ngOnInit() {}

  onAddManyAsync() {
    this.store.dispatch(new postsActions.AddManyAsync());
  }

}
