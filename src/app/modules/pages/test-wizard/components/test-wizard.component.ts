import { Component, OnInit } from '@angular/core';
import { TestWizardService } from '../services/test-wizard.service';
import { Test } from '../../../../models/interfaces';
import { Observable } from 'rxjs';
import { TestWizardStepperService } from '../services/test-wizard-stepper.service';
import { TestWizardStepperEnum } from '../../../../models/enums';
import { HOME_PATH } from '../../../../models/consts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-wizard',
  templateUrl: './test-wizard.component.html',
  styleUrls: ['./test-wizard.component.scss'],
  providers: [TestWizardStepperService]
})
export class TestWizardComponent implements OnInit {

  test$: Observable<Test>;
  currentStep$: Observable<TestWizardStepperEnum>;

  constructor(private readonly testWizardService: TestWizardService,
              private readonly stepperService: TestWizardStepperService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.testWizardService.loadTest();
    this.test$ = this.testWizardService.retrieveTest();
    this.currentStep$ = this.stepperService.getCurrentStep();
  }

  redirectHome(): void {
    this.router.navigateByUrl(HOME_PATH);
  }

}
