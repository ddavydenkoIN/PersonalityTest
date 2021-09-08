import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestIntroComponent } from './components/test-intro.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    TestIntroComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [
    TestIntroComponent
  ]
})
export class TestIntroModule {
}
