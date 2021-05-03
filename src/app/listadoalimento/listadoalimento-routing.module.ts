import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoalimentoPage } from './listadoalimento.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoalimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoalimentoPageRoutingModule {}
