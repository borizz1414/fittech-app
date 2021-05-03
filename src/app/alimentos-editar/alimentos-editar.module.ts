import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentosEditarPageRoutingModule } from './alimentos-editar-routing.module';

import { AlimentosEditarPage } from './alimentos-editar.page';
import { PipesModule } from '../pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentosEditarPageRoutingModule,
    PipesModule

  ],
  declarations: [AlimentosEditarPage]
})
export class AlimentosEditarPageModule {}
