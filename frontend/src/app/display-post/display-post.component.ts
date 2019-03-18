import {Component, OnInit, Input} from '@angular/core';
import {PostPageService} from "../posts-page/post-page.service";
import PostModel from '../post.model';

import { formatDate } from '../../utils/';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.scss'],
})
export class DisplayPostComponent implements OnInit {

  @Input() post: PostModel;

  constructor(private postPageService: PostPageService) {
  }

  ngOnInit() {
    const date = new Date(this.post['date']);
    this.post['date'] = formatDate(date);
  }

  removePost() {
    const postId = this.post['_id'];

    console.log("Post id");
    console.log(postId);

    this.postPageService.removePosts(postId)
      .subscribe(res => {
        console.log(res);
        this.postPageService.getPosts();
      });

  }


}
