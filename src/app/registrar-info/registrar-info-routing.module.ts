import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarInfoPage } from './registrar-info.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarInfoPageRoutingModule {}
