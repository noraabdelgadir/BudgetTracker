import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';


@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-form-content.component.html',
  styleUrls: ['./purchase-form.component.css']
})
export class PurchaseFormContentComponent {

  constructor(public activeModal: NgbActiveModal, private appService: AppService) { }

  purchasesForm = new FormGroup({
    item: new FormControl('', Validators.nullValidator && Validators.required),
    category: new FormControl('', Validators.nullValidator && Validators.required),
    store: new FormControl('', Validators.nullValidator && Validators.required),
    date: new FormControl('', Validators.nullValidator && Validators.required),
    amount: new FormControl('', Validators.nullValidator && Validators.required && Validators.min(0)),
  });
  categories = ['Food', 'Entertainment', 'Utilities', 'Other'];

  onSubmit(): void {
    this.appService.addPurchase(this.purchasesForm.value);
    this.purchasesForm.reset();
    this.activeModal.close('Submit');
  }
}

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})
export class PurchaseFormComponent {
  constructor(private modalService: NgbModal) { }

  open(): void {
    const modalRef = this.modalService.open(PurchaseFormContentComponent);
  }
}
