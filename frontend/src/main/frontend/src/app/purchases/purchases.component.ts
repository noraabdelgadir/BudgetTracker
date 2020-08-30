import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  constructor() { }

  @Input() purchases: any[];

  ngOnInit(): void {
  }

}
