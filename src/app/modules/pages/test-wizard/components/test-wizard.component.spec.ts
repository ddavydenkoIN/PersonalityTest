import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWizardComponent } from './test-wizard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestWizardService } from '../services/test-wizard.service';
import { TestWizardServiceMock } from '../../../../models/mocks';
import { RouterTestingModule } from '@angular/router/testing';

describe('TestWizardComponent', () => {
  let component: TestWizardComponent;
  let fixture: ComponentFixture<TestWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestWizardComponent ],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [{
        provide: TestWizardService,
        useValue: TestWizardServiceMock,
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
