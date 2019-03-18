import {Component, OnInit} from '@angular/core';
import {PostPageService} from './post-page.service';
import PostModel from '../post.model';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  providers: [PostPageService]
})
export class PostsPageComponent implements OnInit {

  posts: Array<PostModel>;
  error: any;

  constructor(private postPageService: PostPageService) {
  }

  ngOnInit() {
      this.postPageService.getPosts();
      this.postPageService.posts.subscribe(posts => {
      this.posts = posts
    })
  }

}
