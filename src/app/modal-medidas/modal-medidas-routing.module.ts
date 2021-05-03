import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalMedidasPage } from './modal-medidas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMedidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalMedidasPageRoutingModule {}
