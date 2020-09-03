import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';


@Component({
  selector: 'app-budget-modal',
  templateUrl: './budget-form-content.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormContentComponent {

  constructor(public activeModal: NgbActiveModal, private appService: AppService) { }

  budgetForm = new FormGroup({
    total: new FormControl('', Validators.nullValidator && Validators.required && Validators.min(0)),
    category: new FormControl('', Validators.nullValidator && Validators.required),
    amount: new FormControl('', Validators.nullValidator && Validators.required && Validators.min(0)),
  });

  onSubmit(): void {
    // this.appService.addBudget(this.budgetsForm.value);
    // this.budgetsForm.reset();
    // this.activeModal.close('Submit');
  }
}

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
