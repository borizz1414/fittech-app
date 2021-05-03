import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalentamientoPage } from './calentamiento.page';

const routes: Routes = [
  {
    path: '',
    component: CalentamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalentamientoPageRoutingModule {}
