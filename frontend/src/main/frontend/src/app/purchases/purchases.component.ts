import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  sum = 0;

  constructor() { }

  @Input() purchases: any[];

  ngOnInit(): void {
    this.purchases.forEach(purchase => purchase.date = moment(purchase.date).format('LL'));
    this.sum = this.purchases.reduce((prev, cur) => {
      return prev + cur.amount;
    }, 0);
  }
}
