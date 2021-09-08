import { Component, Input, OnInit } from '@angular/core';
import { TestData } from '../../../../../../models/interfaces';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { TestWizardStepperService } from '../../../services/test-wizard-stepper.service';
import { TestWizardStepperEnum } from '../../../../../../models/enums';
import { TestWizardService } from '../../../services/test-wizard.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {
  @Input()
  questions: TestData[];

  form: FormGroup;

  constructor(private readonly stepperService: TestWizardStepperService,
              private readonly testService: TestWizardService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup(this.buildForm(this.questions));
  }

  finish(): void {
    console.log(this.form);
    this.testService.evaluateResult(this.form.value);
    this.stepperService.navigateToStep(TestWizardStepperEnum.RESULT);
  }

  private buildForm(questions: TestData[]): Record<string, AbstractControl> {
    return questions.reduce((acc: Record<string, AbstractControl>, curr: TestData) => ({
      ...acc,
      [curr.id]: new FormControl(null, Validators.required),
    }), {});
  }
}

