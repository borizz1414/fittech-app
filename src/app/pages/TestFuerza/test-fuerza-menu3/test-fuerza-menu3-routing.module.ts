import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFuerzaMenu3Page } from './test-fuerza-menu3.page';

const routes: Routes = [
  {
    path: '',
    component: TestFuerzaMenu3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFuerzaMenu3PageRoutingModule {}
