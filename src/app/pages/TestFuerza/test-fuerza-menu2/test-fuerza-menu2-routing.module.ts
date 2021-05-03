import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFuerzaMenu2Page } from './test-fuerza-menu2.page';

const routes: Routes = [
  {
    path: '',
    component: TestFuerzaMenu2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFuerzaMenu2PageRoutingModule {}
