import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() budget;

  constructor() { }

  // budget = 0;
  withinBudget = 'Within Budget';
  percentage = 0;

  ngOnInit(): void {
  }

}
