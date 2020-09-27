import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import Plotly from 'plotly.js-dist';
import { AppService } from '../app.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  totalBudget = 0;
  withinBudget = 'within budget';
  percentage = 0;
  sum = 0;
  budget;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private appService: AppService) {}

  async ngOnInit(): Promise<void> {
    await this.getSum();
    this.getBudget();
  }

  getBudget(): void {
    this.appService.budgetUpdated.subscribe(async () => {
      this.budget = await this.appService.getBudget();
      const amounts = this.budget.map((item) => item.amount);
      this.totalBudget = amounts.reduce((a, b) => a + b, 0);
      this.percentage =
        this.totalBudget === 0
          ? 0
          : parseFloat(((this.sum / this.totalBudget) * 100.0).toFixed(2));

      if (this.totalBudget === 0) {
        this.withinBudget = 'No budget set up';
      } else {
        this.withinBudget =
          this.percentage <= 100 ? 'within budget' : 'over budget';
      }
      this.setChart();
    });
  }

  setChart(): void {
    const data = [
      {
        values: [],
        labels: [],
        type: 'pie',
      },
    ];

    if (!this.budget || this.budget.length === 0) {
      return;
    } else {
      const labels = this.budget.map((item) => item.category);
      const values = this.budget.map((item) => item.amount);
      data[0].values = values;
      data[0].labels = labels;
    }

    Plotly.newPlot('summaryChart', data);
  }

  async getSum(): Promise<void> {
    this.appService.purchaseAdded.subscribe(async () => {
      const purchases = await this.appService.getPurchases();
      console.log(purchases);
      this.sum = purchases.reduce((prev, cur) => {
        return prev + cur.amount;
      }, 0);
    });
  }
}
