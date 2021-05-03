import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajecapacidadPage } from './mensajecapacidad.page';

const routes: Routes = [
  {
    path: '',
    component: MensajecapacidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajecapacidadPageRoutingModule {}
