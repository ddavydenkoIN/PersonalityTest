import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TestWizardStepperEnum } from '../../../../models/enums';

@Injectable()
export class TestWizardStepperService {

  private currentStep = new BehaviorSubject(TestWizardStepperEnum.INTRO);

  navigateToStep(step: TestWizardStepperEnum): void {
    this.currentStep.next(step);
  }

  getCurrentStep(): Observable<TestWizardStepperEnum> {
    return this.currentStep.asObservable();
  }

}
