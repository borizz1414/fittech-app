import { NgModule } from '@angular/core';
import { CapitalizadoPipe } from './capitalizado.pipe';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';


@NgModule({
  imports:[
    CommonModule,
  ],
  declarations: [
    CapitalizadoPipe,
    FilterPipe
  ],
  exports:[
    CapitalizadoPipe,
    FilterPipe
  ]
})
export class PipesModule {}
