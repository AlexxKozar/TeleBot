import { async, TestBed } from '@angular/core/testing';

import { PostPageService} from "./post-page.service";

import { StoreModule, combineReducers } from '@ngrx/store';
import * as fromPosts from '../../store/reducers/posts';
import * as fromRoot from '../../store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DisplayPostComponent', () => {
  let service: PostPageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          feature: combineReducers(fromPosts.reducer),
        }),
        HttpClientTestingModule
      ],
      providers: [ PostPageService ]
    })
  }));

  beforeEach(() => {
    service = TestBed.get(PostPageService);

    console.log("Service");
    console.log(service);

  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

});
