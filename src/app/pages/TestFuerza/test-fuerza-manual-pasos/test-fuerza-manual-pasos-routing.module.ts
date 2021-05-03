import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFuerzaManualPasosPage } from './test-fuerza-manual-pasos.page';

const routes: Routes = [
  {
    path: '',
    component: TestFuerzaManualPasosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFuerzaManualPasosPageRoutingModule {}
