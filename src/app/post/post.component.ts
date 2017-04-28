import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Posts } from './model/posts';
import { EmitterService } from '../emitter.service';
import { PostService } from './services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges {
  posts: Posts[];
  @Input() listId: string;
  @Input() editId: string;
  id: string;
  private sub: any;

  constructor(private postService: PostService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.loadPost();

  }

  loadPost() {
    // Get all posts
    this.postService.getPost(this.id)
      .subscribe(posts =>{
         this.posts = posts;
        });
  }

  ngOnChanges(changes: any) {
    EmitterService.get(this.listId).subscribe((comments: Comment[]) => {
      this.loadPost()
    });
  }
}
