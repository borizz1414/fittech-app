import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFuerzaManualPage } from './test-fuerza-manual.page';

const routes: Routes = [
  {
    path: '',
    component: TestFuerzaManualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFuerzaManualPageRoutingModule {}
