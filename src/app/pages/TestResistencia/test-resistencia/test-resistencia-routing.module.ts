import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestResistenciaPage } from './test-resistencia.page';

const routes: Routes = [
  {
    path: '',
    component: TestResistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestResistenciaPageRoutingModule {}
