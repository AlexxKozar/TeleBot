import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {PostPageService} from '../posts-page/post-page.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  createPostForm = this.fb.group({
    // images: [''],
    text: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private postPageService: PostPageService
  ) {}

  ngOnInit() {
  }

  onSubmit() {
    const post = this.createPostForm.value;

    this.postPageService.putPost(post)
      .subscribe(res => {
        console.log(res);
        this.postPageService.getPosts().subscribe(data => {
          console.log('Data from server');
          console.log(data);

          this.postPageService.getPostsFromStore();
        });
      });
  }

  resetValues() {
  }

}
