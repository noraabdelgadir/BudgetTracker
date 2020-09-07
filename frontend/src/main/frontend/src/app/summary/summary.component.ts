import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { InternalService } from '../internal.service';
import { Subscription } from 'rxjs';
import * as CanvasJS from '../../scripts/canvasjs.min';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnDestroy {
  budget = 0;
  withinBudget = 'within budget';
  percentage = 0;
  categoryBreakdown = [];
  subscription: Subscription;

  @Input() sum;

  constructor(private internalService: InternalService) {
    this.subscription = internalService.total$.subscribe((budget => {this.budget = budget; }));
    this.subscription = internalService.categoryBreakdown$.subscribe((categoryBreakdown => {this.categoryBreakdown = categoryBreakdown; }));
   }

  ngOnInit(): void {
    const chart = new CanvasJS.Chart('summaryChart', {
      theme: 'light2',
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Budget per category'
      },
      data: [{
        type: 'pie',
        showInLegend: true,
        toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
        indexLabel: '{name} - #percent%',
        dataPoints: [
          { y: this.budget, name: 'Unallocated' },
        ]
      }]
    });
    chart.render();
    this.percentage = this.budget === 0 ? 0 : this.sum / this.budget * 100.0;
    this.withinBudget = this.percentage <= 100 ? 'within budget' : 'over budget';
  }

  ngOnDestroy(): void {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
