import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestResultComponent } from './test-result.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestWizardService } from '../../../services/test-wizard.service';
import { TestWizardServiceMock } from '../../../../../../models/mocks';

describe('TestResultComponent', () => {
  let component: TestResultComponent;
  let fixture: ComponentFixture<TestResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestResultComponent ],
      providers: [{
        provide: TestWizardService,
        useValue: TestWizardServiceMock
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
