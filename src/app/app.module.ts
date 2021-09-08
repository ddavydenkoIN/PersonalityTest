import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeModule } from './modules/pages/home/home.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LanguageEnum } from './models/enums';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { createTranslateLoader } from './util/translate-loader';
import { appEffects } from './store/app.effects';
import { appReducers } from './store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTestsService } from './util/in-memory-tests.service';
import { DEFAULT_REST_API_DELAY } from './models/consts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    StoreModule.forRoot(appReducers, {}),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryTestsService,
      {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        delay: DEFAULT_REST_API_DELAY
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      defaultLanguage: LanguageEnum.EN,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
