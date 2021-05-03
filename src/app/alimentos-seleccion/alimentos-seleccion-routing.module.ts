import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentosSeleccionPage } from './alimentos-seleccion.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentosSeleccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentosSeleccionPageRoutingModule {}
