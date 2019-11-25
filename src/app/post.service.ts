import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Wallpost } from './wallpost';
import { POSTS } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

   constructor() { }

   getPosts(): Observable<Wallpost[]> {
      return of(POSTS);
   }
}
