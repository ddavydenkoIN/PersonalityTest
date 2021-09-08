import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestWizardComponent } from './components/test-wizard.component';
import { TestFormModule } from './modules/test-form/test-form.module';
import { TestResultModule } from './modules/test-result/test-result.module';
import { MatTabsModule } from '@angular/material/tabs';
import { TestWizardRoutingModule } from './test-wizard.routing.module';
import { EffectsModule } from '@ngrx/effects';
import { TestEffects } from './store/test.effects';
import { StoreModule } from '@ngrx/store';
import { TEST_FEATURE_KEY } from './store/test.state';
import * as testReducers from './store/test.reducer';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryTestsService } from '../../../util/in-memory-tests.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestIntroModule } from './modules/test-intro/test-intro.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DEFAULT_REST_API_DELAY } from '../../../models/consts';
import { LoaderModule } from '../../common/loader/loader.module';

@NgModule({
  declarations: [
    TestWizardComponent
  ],
  imports: [
    CommonModule,
    TestFormModule,
    TestResultModule,
    TestWizardRoutingModule,
    HttpClientModule,
    MatTabsModule,
    TestIntroModule,
    StoreModule.forFeature(TEST_FEATURE_KEY, testReducers.reducer),
    InMemoryWebApiModule.forFeature(InMemoryTestsService, {delay: DEFAULT_REST_API_DELAY}),
    EffectsModule.forFeature([TestEffects]),
    MatButtonModule,
    LoaderModule,
    MatIconModule,
  ],
  exports: [TestWizardComponent]
})
export class TestWizardModule { }
