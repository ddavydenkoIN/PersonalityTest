import { Test, TestEvaluation } from '../../../../models/interfaces';

export const TEST_FEATURE_KEY = 'test';

export interface TestStoreState {
  test: Test;
  testEvaluation: TestEvaluation;
}

export const initialState: TestStoreState = {
  test: null,
  testEvaluation: null,
};
