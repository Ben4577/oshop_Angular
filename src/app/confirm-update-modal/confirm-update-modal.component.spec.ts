import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmUpdateModalComponent } from './confirm-update-modal.component';

describe('ConfirmUpdateModalComponent', () => {
  let component: ConfirmUpdateModalComponent;
  let fixture: ComponentFixture<ConfirmUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
