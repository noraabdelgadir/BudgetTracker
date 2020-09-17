import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { InternalService } from '../internal.service';
import { Subscription } from 'rxjs';
import Plotly from 'plotly.js-dist';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit, OnDestroy {
  budget = 0;
  withinBudget = 'within budget';
  percentage = 0;
  categoryBreakdown = [];
  subscription: Subscription;

  @Input() sum;

  constructor(private internalService: InternalService) {
    this.subscription = internalService.budgetSource$.subscribe(
      (categoryBreakdown) => {
        this.categoryBreakdown = categoryBreakdown;
        const amounts = this.categoryBreakdown.map((item) => item.amount);
        this.budget = amounts.reduce((a, b) => a + b, 0);
      }
    );
  }

  ngOnInit(): void {
    this.setChart();
    this.percentage = this.budget === 0 ? 0 : (this.sum / this.budget) * 100.0;
    this.withinBudget =
      this.percentage <= 100 ? 'within budget' : 'over budget';
  }

  setChart(): void {
    const data = [
      {
        values: [],
        labels: [],
        type: 'pie',
      },
    ];

    if (this.categoryBreakdown.length === 0) {
      if (!this.budget) {
        return;
      }
      data[0].values.push(this.budget);
      data[0].labels.push('Unallocated');
    } else {
      const labels = this.categoryBreakdown.map((item) => item.category);
      const values = this.categoryBreakdown.map((item) => item.amount);
      data[0].values = labels;
      data[0].labels = values;
    }

    Plotly.newPlot('summaryChart', data);
  }

  ngOnDestroy(): void {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
