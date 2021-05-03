import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalentamientoInfoPage } from './calentamiento-info.page';

const routes: Routes = [
  {
    path: '',
    component: CalentamientoInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalentamientoInfoPageRoutingModule {}
