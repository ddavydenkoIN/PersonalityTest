import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as globalActions from './global.actions';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { TestPreview } from '../../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GlobalEffects {
  loadTestsPreview$ = createEffect(() =>
    this.actions$.pipe(
      ofType(globalActions.loadTests.type),
      switchMap(() => this.httpClient.get<TestPreview[]>(`api/testsPreview`)),
      map((tests: TestPreview[]) => globalActions.loadTestsSuccess({
        payload: tests
      }))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly httpClient: HttpClient,
  ) {}
}
