import { Component, OnInit } from '@angular/core';

import { Runner } from '../runner';
import { RunnerService } from '../runner.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  runners: Runner[];

  constructor( private runnerService: RunnerService ) { }

  ngOnInit() {
     this.getRunners();
  }

  getRunners(): void {
     this.runnerService.getRunners().subscribe( runners => this.runners = runners );
  }
}
