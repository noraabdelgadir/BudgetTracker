import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { takeUntil } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  constructor(private appService: AppService) {}
  destroy$: Subject<boolean> = new Subject<boolean>();
  purchases: any[] = [];
  sum = 0;
  categories = ['Food', 'Entertainment', 'Utilities', 'Other'];

  purchasesForm = new FormGroup({
    item: new FormControl('', Validators.nullValidator && Validators.required),
    category: new FormControl('', Validators.nullValidator && Validators.required),
    store: new FormControl('', Validators.nullValidator && Validators.required),
    date: new FormControl('', Validators.nullValidator && Validators.required),
    amount: new FormControl('', Validators.nullValidator && Validators.required && Validators.min(0)),
  });

  ngOnInit(): void {
    this.getAllPurchases();
  }

  getAllPurchases(): void {
    this.appService.getPurchases().pipe(takeUntil(this.destroy$)).subscribe((purchases: any[]) => {
        this.purchases = purchases;
    });
    this.purchases.forEach(purchase => purchase.date = moment(purchase.date).format('LLL') );
  }


  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSubmit(): void {
    this.appService.addPurchase(this.purchasesForm.value);
    this.purchasesForm.reset();
  }
}
