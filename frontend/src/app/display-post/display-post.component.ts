import {Component, OnInit, Input} from '@angular/core';
import {PostPageService} from "../posts-page/post-page.service";

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.scss'],
})
export class DisplayPostComponent implements OnInit {

  @Input() post: object;

  constructor(private postPageService: PostPageService) {
  }

  ngOnInit() {

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
