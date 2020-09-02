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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PurchasesComponent,
    SummaryComponent,
    PurchaseFormComponent,
    PurchaseFormContentComponent,
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
  entryComponents: [PurchaseFormContentComponent]
})
export class AppModule { }
