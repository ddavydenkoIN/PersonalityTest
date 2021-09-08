import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Test, TestPreview } from '../../../../models/interfaces';
import { GlobalStoreService } from '../../../../store/global/global-store.service';
import { TEST_PATH } from '../../../../models/consts';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private readonly http: HttpClient,
              private readonly globalStoreService: GlobalStoreService,
              private readonly router: Router) { }

  selectTest(selectedTestId: string): void {
    this.globalStoreService.updateSelectedTestId(selectedTestId);
    this.router.navigateByUrl(TEST_PATH);
  }

  retrieveTestsPreview(): Observable<TestPreview[]> {
    return this.globalStoreService.retrieveTestsPreview();
  }

  loadTestsPreview(): void {
    this.globalStoreService.loadTestsPreview();
  }
}
