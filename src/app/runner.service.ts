import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Runner } from './runner';
import { RUNNERS } from './mock-runners';

@Injectable({
   providedIn: 'root'
})
export class RunnerService {

   constructor() { }

   getRunners(): Observable<Runner[]> {
      return of(RUNNERS);
   }
}
