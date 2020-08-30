import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  constructor(private appService: AppService) {}
  title = 'Budget Tracker';
  destroy$: Subject<boolean> = new Subject<boolean>();
  purchases: any[] = [];
  sum = 0;

  purchasesForm = new FormGroup({
    item: new FormControl('', Validators.nullValidator && Validators.required),
    category: new FormControl('', Validators.nullValidator && Validators.required),
    store: new FormControl('', Validators.nullValidator && Validators.required),
    date: new FormControl('', Validators.nullValidator && Validators.required),
    amount: new FormControl('', Validators.nullValidator && Validators.required, && Validators.),
  });

  ngOnInit(): void {
    this.getAllPurchases();
  }

  getAllPurchases(): void {
    this.appService.getPurchases().pipe(takeUntil(this.destroy$)).subscribe((purchases: any[]) => {
        this.purchases = purchases;
    });
    for (const p of this.purchases){
      this.sum += p.amount;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSubmit(): void {
    this.appService.addPurchase(this.purchasesForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.purchasesForm.reset();
    });
  }
}
