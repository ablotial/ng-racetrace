import { Component, OnInit } from '@angular/core';

import { Wallpost } from '../wallpost';
import { POSTS } from '../mock-posts';

@Component({
  selector: 'app-wallpost',
  templateUrl: './wallpost.component.html',
  styleUrls: ['./wallpost.component.css']
})
export class WallpostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  wallposts = POSTS;
}
