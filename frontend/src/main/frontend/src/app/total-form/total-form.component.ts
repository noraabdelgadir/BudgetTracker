import { Component, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InternalService } from '../internal.service';

@Component({
  selector: 'app-total-form-content',
  templateUrl: './total-form-content.component.html',
  styleUrls: ['./total-form.component.css']
})
export class TotalFormContentComponent {

  constructor(public activeModal: NgbActiveModal, private internalService: InternalService) { }

  total: 0;

  totalForm = new FormGroup({
    total: new FormControl(0, Validators.nullValidator && Validators.required && Validators.min(0)),
  });

  onSubmit(): void {
    this.total = this.totalForm.value.total;
    this.internalService.setTotal(this.total);
    this.activeModal.close('Submit');
  }
}

@Component({
  selector: 'app-total-form',
  templateUrl: './total-form.component.html',
  styleUrls: ['./total-form.component.css']
})
export class TotalFormComponent {
  constructor(private modalService: NgbModal) { }

  open(): void {
    this.modalService.open(TotalFormContentComponent);
  }
}
