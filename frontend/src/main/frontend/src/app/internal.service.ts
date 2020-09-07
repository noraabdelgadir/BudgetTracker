import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  constructor() { }

  private totalSource = new Subject<number>();
  private categoryBreakdownSource = new Subject<Array<object>>();

  total$ = this.totalSource.asObservable();
  categoryBreakdown$ = this.categoryBreakdownSource.asObservable();

    setTotal(amount: number): void {
        this.totalSource.next(amount);
    }

    setCategoryBreakdown(breakdown: []): void {
        this.categoryBreakdownSource.next(breakdown);
    }
}
