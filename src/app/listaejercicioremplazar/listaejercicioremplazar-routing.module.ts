import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaejercicioremplazarPage } from './listaejercicioremplazar.page';

const routes: Routes = [
  {
    path: '',
    component: ListaejercicioremplazarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaejercicioremplazarPageRoutingModule {}
