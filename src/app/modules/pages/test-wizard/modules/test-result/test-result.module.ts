import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestResultComponent } from './components/test-result.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LoaderModule } from '../../../../common/loader/loader.module';

@NgModule({
  declarations: [
    TestResultComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    LoaderModule,
  ],
  exports: [
    TestResultComponent
  ]
})
export class TestResultModule { }
