import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostComponent } from './create-post.component';
import { PostPageService } from '../posts-page/post-page.service';

import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule, FormBuilder } from '@angular/forms';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as fromPosts from '../../store/reducers/posts';
import * as fromRoot from '../../store/reducers';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({
          ...fromRoot.reducers,
          feature: combineReducers(fromPosts.reducer),
        }),
        FormsModule
      ],
      declarations: [ CreatePostComponent ],
      providers: [ PostPageService, FormBuilder ]
    })
    .compileComponents();
  }));

  function updateForm(text, date, time) {
    component.createPostForm.controls['text'].setValue(text);
    component.createPostForm.controls['date'].setValue(date);
    component.createPostForm.controls['time'].setValue(time);
  }


  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    updateForm('123', '123', '123');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
