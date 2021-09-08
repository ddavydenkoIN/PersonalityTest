import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TestStoreState } from './test.state';
import { Test, TestEvaluation } from '../../../../models/interfaces';
import * as testSelectors from './test.selectors';
import * as testActions from './test.actions';

@Injectable({
  providedIn: 'root',
})
export class TestStoreService {
  constructor(
    private readonly store$: Store<TestStoreState>
  ) {}

  loadTest(): void {
    this.store$.dispatch(testActions.loadTest());
  }

  retrieveTest(): Observable<Test> {
    return this.store$.pipe(select(testSelectors.retrieveTest));
  }

  evaluateResult(answers: Record<number, number>): void {
    this.store$.dispatch(testActions.evaluateResult({payload: answers}));
  }

  retrieveTestEvaluation(): Observable<TestEvaluation> {
    return this.store$.pipe(select(testSelectors.retrieveTestEvaluation));
  }
}
