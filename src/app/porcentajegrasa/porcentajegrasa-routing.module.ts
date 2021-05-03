import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorcentajegrasaPage } from './porcentajegrasa.page';

const routes: Routes = [
  {
    path: '',
    component: PorcentajegrasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorcentajegrasaPageRoutingModule {}
