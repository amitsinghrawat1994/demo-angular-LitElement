import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperMenuItemComponent } from './stepper-menu-item.component';

describe('StepperMenuItemComponent', () => {
  let component: StepperMenuItemComponent;
  let fixture: ComponentFixture<StepperMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
