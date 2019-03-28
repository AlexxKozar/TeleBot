import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPostComponent } from './display-post.component';
import { PostPageService } from '../../services/posts-page/post-page.service';

// import { StoreModule, Store, combineReducers } from '@ngrx/store';
// import * as fromPosts from '../../store/reducers/posts';
// import * as fromRoot from '../../store/reducers';

class PostPageServiceStub {

}

describe('DisplayPostComponent', () => {
  let component: DisplayPostComponent;
  let fixture: ComponentFixture<DisplayPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // StoreModule.forRoot({
        //   ...fromRoot.reducers,
        //   feature: combineReducers(fromPosts.reducer),
        // }),
      ],
      declarations: [ DisplayPostComponent ],
      providers: [ {provide: PostPageService, useValue:PostPageServiceStub} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPostComponent);
    component = fixture.componentInstance;

    component.post = {
      id: 1,
      text: 'test',
      date: '10.10.2010',
      status: 'waiting',
    };

    console.log("DATE");
    console.log(component.post['date']);
    console.log(component);
    console.log(component.post['date']);
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should format date',() => {
    //component.ngOnInit();
    console.log(component.post['date']);
    expect(component.post['date']).toBe('10.10.10');
  })
});
