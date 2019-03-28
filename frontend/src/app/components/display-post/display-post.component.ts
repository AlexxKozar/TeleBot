import { Component, OnInit, Input } from '@angular/core';
import { PostPageService } from '../../services/posts-page/post-page.service';
import PostModel from '../../models/post.model';


import { formatDate } from '../../../utils/';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.scss'],
})
export class DisplayPostComponent implements OnInit {

  @Input() post: PostModel;

  constructor(
    private postPageService: PostPageService) {
    }

  ngOnInit() {
    this.post['date'] = formatDate(new Date(this.post['date']));
  }

  removePost() {
    const postId = this.post['_id'];

    console.log('Post id');
    console.log(postId);

    this.postPageService.removePosts(postId)
      .subscribe(res => {
        console.log(res);
        this.postPageService.getPostsFromStore();
      });

  }


}
