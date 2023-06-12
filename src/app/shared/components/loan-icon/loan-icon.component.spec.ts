import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanIconComponent } from './loan-icon.component';

describe('LoanIconComponent', () => {
  let component: LoanIconComponent;
  let fixture: ComponentFixture<LoanIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
