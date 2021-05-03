import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescargarPage } from './descargar.page';

const routes: Routes = [
  {
    path: '',
    component: DescargarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescargarPageRoutingModule {}
