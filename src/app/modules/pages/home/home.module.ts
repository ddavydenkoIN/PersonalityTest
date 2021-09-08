import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { TestThumbnailsModule } from '../../common/test-thumbnails/test-thumbnails.module';
import { FooterModule } from '../../common/footer/footer.module';
import { LoaderModule } from '../../common/loader/loader.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TestThumbnailsModule,
    FooterModule,
    LoaderModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
