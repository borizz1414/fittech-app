import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarejercicioPage } from './cambiarejercicio.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarejercicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarejercicioPageRoutingModule {}
