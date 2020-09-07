import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-budget-modal',
  templateUrl: './budget-form-content.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormContentComponent{

  constructor(public activeModal: NgbActiveModal, private appService: AppService) { }

  budgetForm = new FormGroup({
    category: new FormControl('', Validators.nullValidator && Validators.required),
    amount: new FormControl(0, Validators.nullValidator && Validators.required && Validators.min(0)),
  });

  onSubmit(): void {
    // this.appService.setBudget(this.budgetForm.value);
    console.log(this.budgetForm.value);
    this.budgetForm.reset();
    this.activeModal.close('Submit');
  }

  // addNewRow(): string {
  //   const newrow = '<div class="col-sm-5">' +
  //   '<div class="form-group col-md-12">' +
  //     '<label for="categoryInput">Category</label>' +
  //     '<input type="text" class="form-control" formControlName="category" id="categoryInput">' +
  //   '</div>' +
  //   '</div>' +
  //   '<div class="col-sm-5">' +
  //   '<div class="form-group col-md-12">' +
  //   '<label for="amountInput">Amount</label>' +
  //   '<input type="number" min="0" class="form-control" formControlName="amount" id="amountInput">' +
  //   '</div>' +
  //   '</div>' +
  //   '<div class="col-sm-2">' +
  //   '<button type="button" id="addRow" class="btn btn-default">' +
  //   '<i class="fas fa-plus-square fa-3x"></i>' +
  //   'New row' +
  //   '</button>';
  //   return newrow;
  // }
}

// $('#addRow').click(() => {
//   console.log('clicked');
//   $('#formContainer').append(addNewRow());
// });

// function addNewRow(): string {
//   const newrow = '<div class="col-sm-5">' +
//   '<div class="form-group col-md-12">' +
//     '<label for="categoryInput">Category</label>' +
//     '<input type="text" class="form-control" formControlName="category" id="categoryInput">' +
//   '</div>' +
//   '</div>' +
//   '<div class="col-sm-5">' +
//   '<div class="form-group col-md-12">' +
//   '<label for="amountInput">Amount</label>' +
//   '<input type="number" min="0" class="form-control" formControlName="amount" id="amountInput">' +
//   '</div>' +
//   '</div>' +
//   '<div class="col-sm-2">' +
//   '<button type="button" id="addRow" class="btn btn-default">' +
//   '<i class="fas fa-plus-square fa-3x"></i>' +
//   'New row' +
//   '</button>';
//   return newrow;
// }

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent {
  constructor(private modalService: NgbModal) { }

  open(): void {
    const modalRef = this.modalService.open(BudgetFormContentComponent);
  }
}
