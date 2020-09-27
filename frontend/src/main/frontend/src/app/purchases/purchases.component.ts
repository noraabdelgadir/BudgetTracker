import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { AppService } from '../app.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css'],
})
export class PurchasesComponent implements OnDestroy, OnInit {
  sum = 0;
  purchases = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private appService: AppService) {}

  async ngOnInit(): Promise<void> {
    await this.getAllPurchases();
  }

  async getAllPurchases(): Promise<void> {
    this.appService.purchaseAdded.subscribe(async () => {
      this.purchases = await this.appService.getPurchases();
      this.purchases.forEach(
        (purchase) => (purchase.date = moment(purchase.date).format('LL'))
      );
      this.sum = this.purchases.reduce((prev, cur) => {
        return prev + cur.amount;
      }, 0);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
