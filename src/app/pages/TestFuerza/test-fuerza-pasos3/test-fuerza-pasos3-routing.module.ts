import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFuerzaPasos3Page } from './test-fuerza-pasos3.page';

const routes: Routes = [
  {
    path: '',
    component: TestFuerzaPasos3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFuerzaPasos3PageRoutingModule {}
