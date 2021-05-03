import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCapacidadInfoPage } from './test-capacidad-info.page';

const routes: Routes = [
  {
    path: '',
    component: TestCapacidadInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestCapacidadInfoPageRoutingModule {}
