import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCapacidadManualPage } from './test-capacidad-manual.page';

const routes: Routes = [
  {
    path: '',
    component: TestCapacidadManualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestCapacidadManualPageRoutingModule {}
