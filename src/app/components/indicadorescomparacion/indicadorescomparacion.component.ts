import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { NutricionService } from 'src/app/services/nutricion.service';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-indicadorescomparacion',
  templateUrl: './indicadorescomparacion.component.html',
  styleUrls: ['./indicadorescomparacion.component.scss'],
})
export class IndicadorescomparacionComponent implements OnInit {
  fechas:any
  valor: any;
  valor2: any;

  indicadores_ante = {
    ica: null,
    imc:null,
    perimetro_cintura:null,
    tmba:null,
    tmb:null,
    estrategia_nutricional:null,

  }
  indicadores_despues = {
    ica: null,
    imc:null,
    perimetro_cintura:null,
    tmba:null,
    tmb:null,
    estrategia_nutricional:null,
  }

    customActionSheetOptions: any = {
    cssClass: 'progress-class',
  };

  constructor(private ruta: NavController,
    private service: NutricionService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private utilities: MensajesService) { }

  ngOnInit() {
    this.getResume()
  }


  async getResume(){
    this.presentLoading() 
     const valor:any = await this.service.historyIndicators()
     if(valor == false ){
      this.loadingController.dismiss() 
     this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
     }else{
      this.loadingController.dismiss() 
      // this.fechas = valor
      const fecha1 =  valor['Progress']
      const fecha2 =  valor['Progress_food']
      const arraytemp:any = []
        
      console.log(valor['Progress_food'])

      // comparamos los dos array y encontramos fechas similares
      let i = 1
      fecha1.forEach(element => {
          fecha2.forEach(e => {
              if(e.created_at.slice(0, 10) === element.created_at.slice(0, 10) ){    
                // se crean objectos con las fechas similares
                const object ={
                  "id":i++,
                  "created_at":element.created_at.slice(0, 10),
                  "ica": element.ica,
                  "imc": element.imc,
                  "perimetro_cintura": element.perimetro_cintura,
                  "estrategia_nutricional": e.strategy_n,
                  "tmb": e.tmb,
                }
                arraytemp.push(object)
              }
          });
      });
      console.log("nuevo array", arraytemp)
      // se filtra los objectos repetidos producido por las iteracciones
      const filteredArr = arraytemp.reduce((acc, current) => {
        const x = acc.find(item => item.created_at === current.created_at);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      //  se obtiene el nuevo listado
      console.log("filtrado",filteredArr)
       this.fechas = filteredArr
     } 
 }

 async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Por favor espere...',
    cssClass: 'my-loading',
  });
  await loading.present();
}



desde(valor){
  console.log(valor.target.value)
  this.valor = valor.target.value;
  this.buscador(this.valor,"ante")
}

hasta(valor){
  console.log(valor.target.value)
  this.valor2 = valor.target.value;
  this.buscador(this.valor2,"despues")
}

buscador(valor, filtrar){
  const resultado = this.fechas.find( elemento => elemento.id === parseInt(valor) );
  console.log(resultado);
  if(filtrar === "ante"){
    this.indicadores_ante.ica = resultado.ica.toFixed(2),
    this.indicadores_ante.imc = resultado.imc.toFixed(2),
    this.indicadores_ante.perimetro_cintura = resultado.perimetro_cintura,

    this.indicadores_ante.tmba = resultado.tmba,
    this.indicadores_ante.tmb = resultado.tmb,
    this.indicadores_ante.estrategia_nutricional = resultado.estrategia_nutricional + '%'

  }else{
    this.indicadores_despues.ica = resultado.ica.toFixed(2),
    this.indicadores_despues.imc = resultado.imc.toFixed(2),
    this.indicadores_despues.perimetro_cintura = resultado.perimetro_cintura,


    this.indicadores_despues.tmba = resultado.tmba,
    this.indicadores_despues.tmb = resultado.tmb,
    this.indicadores_despues.estrategia_nutricional = resultado.estrategia_nutricional + '%'
  }

}


}
