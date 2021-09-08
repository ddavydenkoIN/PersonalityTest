import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestWizardComponent } from './components/test-wizard.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: TestWizardComponent,
}, {
  path: '**',
  redirectTo: '',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestWizardRoutingModule {
}
