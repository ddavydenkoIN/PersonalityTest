import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as testActions from './test.actions';
import { map, pluck, switchMap, withLatestFrom } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Test, TestResult } from '../../../../models/interfaces';
import { GlobalStoreService } from '../../../../store/global/global-store.service';
import { Action } from '@ngrx/store';
import { TestWizardService } from '../services/test-wizard.service';

@Injectable({
  providedIn: 'root',
})
export class TestEffects {
  loadTest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(testActions.loadTest.type),
      withLatestFrom(this.globalStoreService.retrieveSelectedTestId()),
      switchMap(([_, id]: [Action, string]) => this.httpClient.get<Test>(`api/tests/${id}`)),
      map((data: Test) => testActions.loadTestSuccess({payload: data}))
    )
  );

  evaluateResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(testActions.evaluateResult.type),
      pluck('payload'),
      withLatestFrom(this.globalStoreService.retrieveSelectedTestId()),
      switchMap(([answers, id]: [Record<number, number>, string]) =>
        this.httpClient.get<TestResult>(`api/answers/${id}`)
          .pipe(
            map((testResult: TestResult) => {
              const doAllAnswersMatch = this.testService.doAllAnswersMatch(answers, testResult.answers);
              return testActions.evaluateResultSuccess({
                payload: {
                  result: doAllAnswersMatch
                    ? testResult.overlapResult
                    : testResult.noOverlapResult,
                  description: doAllAnswersMatch
                    ? testResult.overlapDescription
                    : testResult.noOverlapDescription,
                }
              });
            })
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly globalStoreService: GlobalStoreService,
    private readonly httpClient: HttpClient,
    private readonly testService: TestWizardService,
  ) {}
}
