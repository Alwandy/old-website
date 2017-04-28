import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule }   from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';

import { BlogService } from './blog/services/blog.service';
import { PostComponent } from './post/post.component';
import { PostService } from './post/services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule
  ],
  providers: [BlogService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
