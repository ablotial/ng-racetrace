import { Component, OnInit } from '@angular/core';

import { Wallpost } from '../wallpost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-wallpost',
  templateUrl: './wallpost.component.html',
  styleUrls: ['./wallpost.component.css']
})
export class WallpostComponent implements OnInit {

  constructor( private postService: PostService ) { }

  ngOnInit() {
     this.getPosts();
  }

  wallposts: Wallpost[];

  getPosts(): void {
     this.postService.getPosts().subscribe( wallposts => this.wallposts = wallposts );
  }
}
