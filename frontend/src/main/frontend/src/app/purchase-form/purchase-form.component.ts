import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-form-content.component.html',
  styleUrls: ['./purchase-form.component.css'],
})
export class PurchaseFormContentComponent {
  categories = ['Unallocated'];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public activeModal: NgbActiveModal,
    private appService: AppService
  ) {
    this.appService.budgetUpdated.subscribe(async () => {
      const budget = await this.appService.getBudget();
      const categories = budget.map((item) => item.category);
      if (categories && categories.length > 0) {
        this.categories = categories;
      }
    });
  }

  purchasesForm = new FormGroup({
    item: new FormControl('', Validators.nullValidator && Validators.required),
    category: new FormControl(
      '',
      Validators.nullValidator && Validators.required
    ),
    store: new FormControl('', Validators.nullValidator && Validators.required),
    date: new FormControl('', Validators.nullValidator && Validators.required),
    amount: new FormControl(
      '',
      Validators.nullValidator && Validators.required && Validators.min(0)
    ),
  });

  onSubmit(): void {
    this.appService.addPurchase(this.purchasesForm.value).subscribe(
      () => {
        this.appService.purchaseAdded.next(true);
        console.log('success');
      },
      (error) => {
        console.log('error: ', error);
      }
    );
    this.purchasesForm.reset();
    this.activeModal.close('Submit');
  }
}

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css'],
})
export class PurchaseFormComponent {
  constructor(private modalService: NgbModal) {}

  open(): void {
    this.modalService.open(PurchaseFormContentComponent);
  }
}
