import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFuerzaPasos2Page } from './test-fuerza-pasos2.page';

const routes: Routes = [
  {
    path: '',
    component: TestFuerzaPasos2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFuerzaPasos2PageRoutingModule {}
