import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalentamientodosPage } from './calentamientodos.page';

const routes: Routes = [
  {
    path: '',
    component: CalentamientodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalentamientodosPageRoutingModule {}
