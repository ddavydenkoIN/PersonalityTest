import { Injectable } from '@angular/core';
import { TestStoreService } from '../store/test-store.service';
import { Observable } from 'rxjs';
import { Test, TestEvaluation } from '../../../../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TestWizardService {
  constructor(private readonly testStoreService: TestStoreService) {
  }

  loadTest(): void {
    this.testStoreService.loadTest();
  }

  retrieveTest(): Observable<Test> {
    return this.testStoreService.retrieveTest();
  }

  evaluateResult(answers: Record<number, number>): void {
    this.testStoreService.evaluateResult(answers);
  }

  doAllAnswersMatch(answers: Record<number, number>, resultFromBe: Record<number, number>): boolean {
    return Object
      .entries(resultFromBe)
      .every(([key, value]: [string, number]) => answers[key] === value);
  }

  retrieveTestEvaluation(): Observable<TestEvaluation> {
    return this.testStoreService.retrieveTestEvaluation();
  }
}

