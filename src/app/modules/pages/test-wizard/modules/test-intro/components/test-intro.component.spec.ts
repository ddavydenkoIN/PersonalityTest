import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIntroComponent } from './test-intro.component';
import { TestWizardStepperServiceMock } from '../../../../../../models/mocks';
import { TestWizardStepperService } from '../../../services/test-wizard-stepper.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TestIntroComponent', () => {
  let component: TestIntroComponent;
  let fixture: ComponentFixture<TestIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestIntroComponent ],
      providers: [{
        provide: TestWizardStepperService,
        useValue: TestWizardStepperServiceMock,
      }],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
