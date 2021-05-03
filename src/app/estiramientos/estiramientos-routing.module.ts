import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstiramientosPage } from './estiramientos.page';

const routes: Routes = [
  {
    path: '',
    component: EstiramientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstiramientosPageRoutingModule {}
