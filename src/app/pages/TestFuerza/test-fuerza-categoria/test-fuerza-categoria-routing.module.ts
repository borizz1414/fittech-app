import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFuerzaCategoriaPage } from './test-fuerza-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: TestFuerzaCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFuerzaCategoriaPageRoutingModule {}
