import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormMedicoPage } from './form-medico.page';

const routes: Routes = [
  {
    path: '',
    component: FormMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormMedicoPageRoutingModule {}
