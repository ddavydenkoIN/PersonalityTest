import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalStoreState } from './global.state';
import * as globalSelectors from './global.selectors';
import * as globalActions from './global.actions';
import { TestPreview } from '../../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GlobalStoreService {
  constructor(
    private readonly store$: Store<GlobalStoreState>
  ) {
  }

  retrieveTestsPreview(): Observable<TestPreview[]> {
    return this.store$.pipe(select(globalSelectors.retrieveTestsPreview));
  }

  loadTestsPreview(): void {
    this.store$.dispatch(globalActions.loadTests());
  }

  retrieveSelectedTestId(): Observable<string> {
    return this.store$.pipe(select(globalSelectors.retrieveSelectedTestId));
  }

  updateSelectedTestId(selectedTestId: string | null): void {
    this.store$.dispatch(globalActions.updateSelectedTestId({payload: selectedTestId}));
  }
}
