import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestThumbnailsComponent } from './components/test-thumbnails.component';
import { TestThumbnailModule } from '../test-thumbnail/test-thumbnail.module';

@NgModule({
  declarations: [
    TestThumbnailsComponent
  ],
  imports: [
    CommonModule,
    TestThumbnailModule
  ],
  exports: [TestThumbnailsComponent]
})
export class TestThumbnailsModule { }
