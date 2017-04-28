import {Component, OnChanges, OnInit, Input} from '@angular/core';
import { Posts } from './model/posts';
import { EmitterService } from '../emitter.service';
import { BlogService } from './services/blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnChanges {
  posts: Posts[];
  @Input() listId: string;
  @Input() editId: string;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    // Get all posts
    this.blogService.getPosts()
      .subscribe(
        posts => this.posts = posts, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }

  ngOnChanges(changes:any){
    EmitterService.get(this.listId).subscribe((comments:Comment[]) => { this.loadPosts()});
  }

}
