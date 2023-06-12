import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDesComponent } from './card-des.component';

describe('CardDesComponent', () => {
  let component: CardDesComponent;
  let fixture: ComponentFixture<CardDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
