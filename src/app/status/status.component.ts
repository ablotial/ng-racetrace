import { Component, OnInit } from '@angular/core';

import { Runner } from '../runner';
import { RUNNERS } from '../mock-runners';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  runners: Runner[] = RUNNERS;

}
