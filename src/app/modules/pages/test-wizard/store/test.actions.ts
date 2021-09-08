import { createAction, props } from '@ngrx/store';
import { Test, TestEvaluation } from '../../../../models/interfaces';

export const evaluateResult = createAction(
    '[Test] Evaluate result',
    props<{payload: Record<number, number>}>()
);

export const loadTestSuccess = createAction(
  '[Test] Load test answers',
  props<{payload: Test}>()
);

export const loadTest = createAction(
  '[Test] Load test data',
);

export const evaluateResultSuccess = createAction(
    '[Test] Complete evaluating test result',
    props<{payload: TestEvaluation}>()
);
