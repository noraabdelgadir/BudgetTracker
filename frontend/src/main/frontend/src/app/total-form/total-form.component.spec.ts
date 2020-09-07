import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalFormComponent } from './total-form.component';

describe('TotalFormComponent', () => {
  let component: TotalFormComponent;
  let fixture: ComponentFixture<TotalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
