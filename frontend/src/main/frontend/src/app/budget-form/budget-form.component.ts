import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { InternalService } from '../internal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-budget-modal',
  templateUrl: './budget-form-content.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormContentComponent implements OnInit, OnDestroy {
  budgetForm: FormGroup;
  total = 0;
  unallocated = 0;
  subscription: Subscription;

  constructor(public activeModal: NgbActiveModal, private internalService: InternalService, private formBuilder: FormBuilder) {
    this.subscription = internalService.total$.subscribe((total => this.total = total));
  }

  ngOnInit(): void {
    this.budgetForm = this.formBuilder.group({
      breakdown: this.formBuilder.array([this.addBudgetFormGroup()])
    });
  }

  addBudgetFormGroup(): FormGroup {
    return this.formBuilder.group({
      category: new FormControl('', Validators.nullValidator && Validators.required),
      amount: new FormControl(0, Validators.nullValidator && Validators.required && Validators.min(0)),
    });
  }

  addButtonClick(): void {
    (this.budgetForm.get('breakdown') as FormArray).push(
      this.addBudgetFormGroup()
    );
  }

  onSubmit(): void {
    this.internalService.setCategoryBreakdown(this.budgetForm.value.breakdown);
    this.budgetForm.reset();
    this.activeModal.close('Submit');
  }

  ngOnDestroy(): void {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
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
    this.modalService.open(BudgetFormContentComponent);
  }
}
