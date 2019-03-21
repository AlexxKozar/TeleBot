import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { DisplayPostComponent } from './components/display-post/display-post.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        CreatePostComponent,
        DisplayPostComponent,
        PostsPageComponent
      ],
    }).compileComponents();
  }));

  xit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  xit(`should have as title 'TeleBot'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TeleBot');
  });

  xit('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to TeleBot!');
  });
});
