import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajecorazonPage } from './mensajecorazon.page';

const routes: Routes = [
  {
    path: '',
    component: MensajecorazonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajecorazonPageRoutingModule {}
