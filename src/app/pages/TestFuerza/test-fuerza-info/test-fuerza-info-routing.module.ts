import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFuerzaInfoPage } from './test-fuerza-info.page';

const routes: Routes = [
  {
    path: '',
    component: TestFuerzaInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFuerzaInfoPageRoutingModule {}
