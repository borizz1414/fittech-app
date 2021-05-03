import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalComparacionPage } from './modal-comparacion.page';

const routes: Routes = [
  {
    path: '',
    component: ModalComparacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalComparacionPageRoutingModule {}
