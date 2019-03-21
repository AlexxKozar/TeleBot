import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsPageComponent } from './posts-page.component';

describe('PostsPageComponent', () => {
  let component: PostsPageComponent;
  let fixture: ComponentFixture<PostsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
