import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PostsPageComponent } from './posts-page.component';
import { PostPageService } from '../../services/posts-page/post-page.service';

import { TestStore } from '../../../testing/utils';
import { Store } from "@ngrx/store";

fdescribe('PostsPageComponent', () => {

  let component: PostsPageComponent;
  let fixture: ComponentFixture<PostsPageComponent>;
  let store: TestStore<object>;

  class PostPageServiceStub {
    getPostsFromStore(){}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[],
      declarations: [
        PostsPageComponent
      ],
      providers:[
        { provide: PostPageService, useClass: PostPageServiceStub },
        { provide: Store, useClass: TestStore }
      ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(PostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.get(Store);
    store.setState({123: 123});
    console.log(store);

  });

  it('should create', () => {
    store.select().subscribe(res => console.log(res));
    expect(component).toBeTruthy();
  });

});
