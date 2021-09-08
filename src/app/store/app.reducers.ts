import { ActionReducerMap } from '@ngrx/store/src/models';

import { GLOBAL_FEATURE_KEY, GlobalStoreState } from './global/global.state';
import * as globalReducer from './global/global.reducer';

export const appReducers: ActionReducerMap<unknown> = {
  [GLOBAL_FEATURE_KEY]: globalReducer.reducer,
};

export type AppState = {
  [GLOBAL_FEATURE_KEY]: GlobalStoreState;
};
