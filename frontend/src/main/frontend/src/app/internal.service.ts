import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  constructor() { }
  total: 0;

    setTotal(amount): void {
        this.total = amount;
    }

    getTotal(): number {
        return this.total;
    }

}
