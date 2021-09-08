import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestThumbnailComponent } from './components/test-thumbnail.component';

@NgModule({
  declarations: [TestThumbnailComponent],
  imports: [
    CommonModule,
  ],
  exports: [TestThumbnailComponent]
})
export class TestThumbnailModule {
}
