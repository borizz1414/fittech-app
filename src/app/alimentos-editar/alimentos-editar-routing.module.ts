import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentosEditarPage } from './alimentos-editar.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentosEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentosEditarPageRoutingModule {}
