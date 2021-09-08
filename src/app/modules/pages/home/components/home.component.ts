import { Component, OnInit } from '@angular/core';
import { TestPreview } from '../../../../models/interfaces';
import { Observable } from 'rxjs';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  testsPreview$: Observable<TestPreview[]>;

  constructor(private readonly homeService: HomeService) {
  }

  ngOnInit(): void {
    this.homeService.loadTestsPreview();
    this.testsPreview$ = this.homeService.retrieveTestsPreview();
  }

  selectTheTest(selectedTestId: string): void {
    this.homeService.selectTest(selectedTestId);
  }
}
