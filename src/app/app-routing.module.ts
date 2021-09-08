import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOME_PATH, NOT_FOUND_PATH, TEST_PATH } from './models/consts';
import { HomeComponent } from './modules/pages/home/components/home.component';

const routes: Routes = [{
    path: HOME_PATH,
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: TEST_PATH,
    loadChildren: () => import('./modules/pages/test-wizard/test-wizard.module').then(mod => mod.TestWizardModule)
  },
  {
    path: NOT_FOUND_PATH,
    loadChildren: () => import('./modules/pages/not-found/not-found.module').then(mod => mod.NotFoundModule)
  },
  {
    path: '**',
    redirectTo: NOT_FOUND_PATH
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
