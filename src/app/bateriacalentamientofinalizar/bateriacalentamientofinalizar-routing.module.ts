import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateriacalentamientofinalizarPage } from './bateriacalentamientofinalizar.page';

const routes: Routes = [
  {
    path: '',
    component: BateriacalentamientofinalizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateriacalentamientofinalizarPageRoutingModule {}
