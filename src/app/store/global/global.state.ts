import { TestPreview } from '../../models/interfaces';

export const GLOBAL_FEATURE_KEY = 'global';

export interface GlobalStoreState {
  selectedTestId: string | null;
  testsPreview: TestPreview[];
}

export const initialState: GlobalStoreState = {
  selectedTestId: null,
  testsPreview: null,
};
