import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { SummaryComponent } from './summary/summary.component';
import { PurchaseFormComponent, PurchaseFormContentComponent } from './purchase-form/purchase-form.component';
import { BudgetFormComponent, BudgetFormContentComponent } from './budget-form/budget-form.component';
import { TotalFormComponent, TotalFormContentComponent } from './total-form/total-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PurchasesComponent,
    SummaryComponent,
    PurchaseFormComponent,
    PurchaseFormContentComponent,
    BudgetFormComponent,
    BudgetFormContentComponent,
    TotalFormComponent,
    TotalFormContentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PurchaseFormContentComponent, BudgetFormContentComponent, TotalFormContentComponent]
})
export class AppModule { }
