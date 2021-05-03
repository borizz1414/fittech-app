import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFuerzaMenuPage } from './test-fuerza-menu.page';

const routes: Routes = [
  {
    path: '',
    component: TestFuerzaMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFuerzaMenuPageRoutingModule {}
