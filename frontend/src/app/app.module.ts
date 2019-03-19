import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { DisplayPostComponent } from './components/display-post/display-post.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';

import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    DisplayPostComponent,
    PostsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
