import { Component, OnInit, Input } from '@angular/core';
import { InternalService } from '../internal.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
   budget;
  

  constructor(private internalService: InternalService) { }

  // budget = 0;
  withinBudget = 'Within Budget';
  percentage = 0;

  ngOnInit(): void {
    this.budget = this.internalService.getTotal() || 0;
  }

  ngOnChange(): void {
    // this will be called each time userInput changes
    this.budget = this.internalService.getTotal() || 0;
}

}
