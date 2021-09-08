import { createFeatureSelector, createSelector } from '@ngrx/store';

import { GLOBAL_FEATURE_KEY, GlobalStoreState } from './global.state';

const globalState = createFeatureSelector<GlobalStoreState>(GLOBAL_FEATURE_KEY);

export const retrieveSelectedTestId = createSelector(
  globalState,
  (state: GlobalStoreState) => state.selectedTestId
);

export const retrieveTestsPreview = createSelector(
  globalState,
  (state: GlobalStoreState) => state.testsPreview
);
