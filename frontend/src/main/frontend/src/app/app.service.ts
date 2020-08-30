import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getPurchases(): any {
    return this.http.get(this.rootURL + '/purchases/');
  }

  addPurchase(purchase: any): any {
    // purchase.id = id;
    console.log({purchase});
    return this.http.post(this.rootURL + '/purchases/create/', purchase).subscribe(
        data => console.log('success', data),
        error => console.log('oops', error)
      );
  }

}
