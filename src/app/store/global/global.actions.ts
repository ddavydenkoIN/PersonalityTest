import { createAction, props } from '@ngrx/store';
import { TestPreview } from '../../models/interfaces';

export const updateSelectedTestId = createAction(
  '[Global] Update selected test Id',
  props<{ payload: string }>()
);

export const loadTests = createAction(
  '[Global] Load home page tests',
);

export const loadTestsSuccess = createAction(
  '[Global] Load tests success',
  props<{ payload: TestPreview[] }>()
);
