import { Component, Input } from '@angular/core';
import { Test } from '../../../../../../models/interfaces';
import { TestWizardStepperService } from '../../../services/test-wizard-stepper.service';
import { TestWizardStepperEnum } from '../../../../../../models/enums';

@Component({
  selector: 'app-test-intro',
  templateUrl: './test-intro.component.html',
  styleUrls: ['./test-intro.component.scss']
})
export class TestIntroComponent {

  @Input()
  test: Test;

  constructor(private readonly stepperService: TestWizardStepperService) { }

  start(): void {
    this.stepperService.navigateToStep(TestWizardStepperEnum.FORM);
  }
}
