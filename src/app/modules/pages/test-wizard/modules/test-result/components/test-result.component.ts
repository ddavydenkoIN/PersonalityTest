import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestEvaluation } from '../../../../../../models/interfaces';
import { TestWizardService } from '../../../services/test-wizard.service';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss']
})
export class TestResultComponent implements OnInit {

  evaluation$: Observable<TestEvaluation>;

  constructor(private readonly testService: TestWizardService) { }

  ngOnInit(): void {
    this.evaluation$ = this.testService.retrieveTestEvaluation();
  }

}
