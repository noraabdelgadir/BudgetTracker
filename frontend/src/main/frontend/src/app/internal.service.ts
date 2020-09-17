import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InternalService {
  constructor() {}
  private budgetSource = new Subject<Array<object>>();

  budgetSource$ = this.budgetSource.asObservable();

  setBudget(breakdown: []): void {
    this.budgetSource.next(breakdown);
  }
}
