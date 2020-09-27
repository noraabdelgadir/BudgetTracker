import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public purchaseAdded: Subject<boolean>;
  public budgetUpdated: Subject<boolean>;

  constructor(private http: HttpClient) {
    this.budgetUpdated = new Subject<boolean>();
    this.purchaseAdded = new Subject<boolean>();
  }

  rootURL = '/api';

  getPurchases(): any {
    return this.http.get(this.rootURL + '/purchases/').toPromise();
  }

  addPurchase(purchase: any): any {
    return this.http.post(this.rootURL + '/purchases/', purchase);
  }

  getBudget(): any {
    return this.http.get(this.rootURL + '/budgets/').toPromise();
  }

  setBudget(budgets: any): any {
    // first delete all existing entries
    this.http.delete(this.rootURL + '/budgets/').subscribe(
      (data) => console.log('success', data),
      (error) => console.log('oops', error)
    );

    const responses = [];
    for (const budget of budgets) {
      responses.push(this.http.post(this.rootURL + '/budgets/', budget));
    }
    return responses;
  }
}
