import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PercepcionentrenamientoPage } from './percepcionentrenamiento.page';

const routes: Routes = [
  {
    path: '',
    component: PercepcionentrenamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PercepcionentrenamientoPageRoutingModule {}
