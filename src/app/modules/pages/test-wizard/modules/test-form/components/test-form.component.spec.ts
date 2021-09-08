import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormComponent } from './test-form.component';
import { TestWizardService } from '../../../services/test-wizard.service';
import { TestWizardServiceMock, TestWizardStepperServiceMock } from '../../../../../../models/mocks';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestWizardStepperService } from '../../../services/test-wizard-stepper.service';

describe('TestFormComponent', () => {
  let component: TestFormComponent;
  let fixture: ComponentFixture<TestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFormComponent ],
      providers: [{
        provide: TestWizardService,
        useValue: TestWizardServiceMock,
      }, {
        provide: TestWizardStepperService,
        useValue: TestWizardStepperServiceMock,
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFormComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
