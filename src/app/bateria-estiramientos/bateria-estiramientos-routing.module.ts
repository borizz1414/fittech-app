import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateriaEstiramientosPage } from './bateria-estiramientos.page';

const routes: Routes = [
  {
    path: '',
    component: BateriaEstiramientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateriaEstiramientosPageRoutingModule {}
