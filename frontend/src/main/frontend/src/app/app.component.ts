import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AppService } from './app.service';
import { takeUntil } from 'rxjs/operators';

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
  budget = 0;

  ngOnInit(): void {
    this.getAllPurchases();
  }

  getAllPurchases(): void {
    this.appService.getPurchases().pipe(takeUntil(this.destroy$)).subscribe((purchases: any[]) => {
        this.purchases = purchases;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
