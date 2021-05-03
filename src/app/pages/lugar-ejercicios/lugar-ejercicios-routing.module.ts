import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugarEjerciciosPage } from './lugar-ejercicios.page';

const routes: Routes = [
  {
    path: '',
    component: LugarEjerciciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugarEjerciciosPageRoutingModule {}
