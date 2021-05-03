import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFotosPage } from './modal-fotos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFotosPageRoutingModule {}
