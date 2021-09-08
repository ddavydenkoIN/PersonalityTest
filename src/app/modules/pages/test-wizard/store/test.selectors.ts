import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TEST_FEATURE_KEY, TestStoreState } from './test.state';

const testState = createFeatureSelector<TestStoreState>(TEST_FEATURE_KEY);

export const retrieveTest = createSelector(
  testState,
  (state: TestStoreState) => state.test
);

export const retrieveTestEvaluation = createSelector(
  testState,
  (state: TestStoreState) => state.testEvaluation
);
