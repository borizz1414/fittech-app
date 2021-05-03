import { Component, OnInit } from '@angular/core';
import { NutricionService } from 'src/app/services/nutricion.service';
import { LoadingController } from '@ionic/angular';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss'],
})
export class IndicadoresComponent implements OnInit {
  dato:any
  info: boolean;
  indicador:number


  constructor(
              private service: NutricionService,
              public loadingController: LoadingController,
              private utilities: MensajesService) { }

  ngOnInit() {
    this.getIndicators()
  }

  async getIndicators(){
    this.presentLoading()
    const valor = await this.service.indicadores()
    this.loadingController.dismiss()
      if(valor == false ){
        console.log("ocuiro un error")
      }else{
        this.dato = valor
        console.log("que recibo" , valor)
      }
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Por favor espere...',      
      cssClass: 'my-loading',
    });
    await loading.present();
  }

    mostrar(valor,indicador){
      this.indicador = indicador
      this.info = !valor;
  }

  cerrar(){
    this.info = false;
  }


}
