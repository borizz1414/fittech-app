import { NgModule} from '@angular/core';
import { IonicModule } from '@ionic/angular'; 

import { CommonModule } from '@angular/common';
import {EdadComponent} from './edad/edad.component'
import {EstaturaComponent} from './estatura/estatura.component'
import {PesoComponent} from './peso/peso.component'
import {HistorialComponent} from './historial/historial.component'
import {PopinfoComponent} from './popinfo/popinfo.component'
import { PopremplazarComponent } from './popremplazar/popremplazar.component';
import { PopmensajeComponent } from './popmensaje/popmensaje.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntecedentefmliarComponent } from '../antecedentefmliar/antecedentefmliar.component';
import { BackBtnComponent } from '../back-btn/back-btn.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { MedidasComponent } from './medidas/medidas.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { PremiumComponent } from './premium/premium.component';
import { IndicadorescomparacionComponent } from './indicadorescomparacion/indicadorescomparacion.component';
import { Estatura2Component } from './estatura2/estatura2.component';
import { FotosComponent } from './fotos/fotos.component';
import { TutorialAlimentoPaso1Component } from './tutorial-alimento-paso1/tutorial-alimento-paso1.component';
import { TutorialAlimentoPaso2Component } from './tutorial-alimento-paso2/tutorial-alimento-paso2.component';
import { TutorialAlimentoPaso3Component } from './tutorial-alimento-paso3/tutorial-alimento-paso3.component';
import { TutorialAlimentoPaso4Component } from './tutorial-alimento-paso4/tutorial-alimento-paso4.component';
import { TutorialPlanesPaso1Component } from './tutorial-planes-paso1/tutorial-planes-paso1.component';
import { TutorialPlanesPaso2Component } from './tutorial-planes-paso2/tutorial-planes-paso2.component';
import { TutorialPlanesPaso3Component } from './tutorial-planes-paso3/tutorial-planes-paso3.component';
import { TutorialPlanesPaso4Component } from './tutorial-planes-paso4/tutorial-planes-paso4.component';
import { TutorialPlanesPaso5Component } from './tutorial-planes-paso5/tutorial-planes-paso5.component';
import { TutorialPlanesPaso6Component } from './tutorial-planes-paso6/tutorial-planes-paso6.component';
import { TutorialPlanesPaso7Component } from './tutorial-planes-paso7/tutorial-planes-paso7.component';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { ModalInfoPageModule } from '../modal-info/modal-info.module';
import { ModalFotosPage } from '../modal-fotos/modal-fotos.page';
import { ModalFotosPageModule } from '../modal-fotos/modal-fotos.module';
@NgModule({
  entryComponents:[
   ModalInfoPage,
  //  ModalFotosPage,
  ],
  declarations: [
    EdadComponent,
    EstaturaComponent,
    PesoComponent,
    HistorialComponent,
    PopinfoComponent,
    PopremplazarComponent,
    PopmensajeComponent,
    AntecedentefmliarComponent,
    IndicadoresComponent,
    BackBtnComponent,
    MedidasComponent,
    ProgresoComponent,
    PremiumComponent,
    IndicadorescomparacionComponent,
    Estatura2Component,
    FotosComponent,
    TutorialAlimentoPaso1Component,
    TutorialAlimentoPaso2Component,
    TutorialAlimentoPaso3Component,
    TutorialAlimentoPaso4Component,
    TutorialAlimentoPaso4Component,
    TutorialPlanesPaso1Component,
    TutorialPlanesPaso2Component,
    TutorialPlanesPaso3Component,
    TutorialPlanesPaso4Component,
    TutorialPlanesPaso5Component,
    TutorialPlanesPaso6Component,
    TutorialPlanesPaso7Component
  ],
  exports:[
    EdadComponent,
    EstaturaComponent,
    PesoComponent,
    HistorialComponent,
    PopinfoComponent,
    PopremplazarComponent,
    PopmensajeComponent,
    AntecedentefmliarComponent,
    BackBtnComponent,
    IndicadoresComponent,
    MedidasComponent,
    ProgresoComponent,
    FotosComponent,
    PremiumComponent,
    IndicadorescomparacionComponent,
    Estatura2Component,
    TutorialAlimentoPaso1Component,
    TutorialAlimentoPaso2Component,
    TutorialAlimentoPaso3Component,
    TutorialAlimentoPaso4Component,
    TutorialPlanesPaso1Component,
    TutorialPlanesPaso2Component,
    TutorialPlanesPaso3Component,
    TutorialPlanesPaso4Component,
    TutorialPlanesPaso5Component,
    TutorialPlanesPaso6Component,
    TutorialPlanesPaso7Component
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule,
    ModalInfoPageModule,
    // ModalFotosPageModule
  ]
})
export class ComponentsModule { }
