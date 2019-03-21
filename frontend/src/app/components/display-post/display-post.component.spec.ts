import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPostComponent } from './display-post.component';
import { PostPageService } from '../posts-page/post-page.service';

import { HttpClientTestingModule} from '@angular/common/http/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as fromPosts from '../../store/reducers/posts';
import * as fromRoot from '../../store/reducers';



describe('DisplayPostComponent', () => {
  let component: DisplayPostComponent;
  let fixture: ComponentFixture<DisplayPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({
          ...fromRoot.reducers,
          feature: combineReducers(fromPosts.reducer),
        }),
      ],
      declarations: [ DisplayPostComponent ],
      providers: [ PostPageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPostComponent);
    component = fixture.componentInstance;
    component.post = {
      id: 1,
      text: 'test',
      date: 'test',
      status: 'waiting',
    };
    fixture.detectChanges();

    console.log(component);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
