import { Component, OnInit } from '@angular/core';

import { Wallpost } from '../wallpost';

@Component({
  selector: 'app-wallpost',
  templateUrl: './wallpost.component.html',
  styleUrls: ['./wallpost.component.css']
})
export class WallpostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  wallpost: Wallpost = {
     message: 'this is a temporary message',
     image: 'https://racetrace.net/m/uploads/thumb5dab3cd1eb32720191019_123535.jpg',
     user: 'Deana',
     timestamp: '1573563936',
  };
}
