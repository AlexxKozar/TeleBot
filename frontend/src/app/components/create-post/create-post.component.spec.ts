import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostComponent } from './create-post.component';
import { PostPageService } from '../../services/posts-page/post-page.service';

import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

class PostPageServiceStub {}

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ CreatePostComponent ],
      providers: [
        { provide: PostPageService, useValue: PostPageServiceStub },
        FormBuilder
      ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    console.log('fixture');
    console.log(fixture);
    console.log('component');
    console.log(component);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
