import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent }   from './about/about.component';
import { BlogComponent }   from './blog/blog.component';
import { PostComponent }   from './post/post.component';
const routes: Routes = [
  { path: '',  component: BlogComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'post/:id',  component: PostComponent },
  {path: '**', redirectTo: '/', pathMatch: 'full' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
