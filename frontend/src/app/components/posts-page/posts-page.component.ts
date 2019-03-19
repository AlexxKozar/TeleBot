import { Component, OnInit } from '@angular/core';
import { PostPageService } from './post-page.service';
import PostModel from '../../models/post.model';

import { Store } from '@ngrx/store';
import * as rootReducer from '../../store/reducers/';
import * as postsActions from '../../store/actions/posts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  providers: [PostPageService]
})
export class PostsPageComponent implements OnInit {

  posts: Array<PostModel>;
  posts$: Observable<PostModel[]>
  error: any;

  constructor(
    private postPageService: PostPageService,
    private store: Store<rootReducer.State>
    ) {
      this.posts$ = store.select(rootReducer.getPosts);
      console.log("Posts$");
      console.log(this.posts$);
      console.log('Store');
      this.posts$.subscribe(res => console.log(res))
    }


  ngOnInit() {
      this.postPageService.getPosts();
      this.postPageService.posts.subscribe(posts => {
      this.posts = posts

      this.onAdd();
    })
  }

  onAdd(){
    this.store.dispatch(new postsActions.AddOne({
      id: 2,
      text: 'bla',
      date: '11.12.2019',
      isPublished: false
    }))
  }

}
