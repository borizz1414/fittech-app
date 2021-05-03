import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrenamientosPageRoutingModule } from './entrenamientos-routing.module';

import { EntrenamientosPage } from './entrenamientos.page';
import { PopinfoComponent } from '../components/popinfo/popinfo.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipe.module';


@NgModule({
  entryComponents:[
   PopinfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrenamientosPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [EntrenamientosPage]
})
export class EntrenamientosPageModule {}
