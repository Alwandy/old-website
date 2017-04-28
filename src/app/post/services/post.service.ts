// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Posts }           from '../model/posts';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private postsUrl = 'http://localhost:4070/api/posts';

  // Fetch all existing posts
  getPost(id) : Observable<Posts[]> {
    // ...using get request
    return this.http.get(this.postsUrl + '/' + id)
    // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
