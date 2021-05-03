import { Component, OnInit } from '@angular/core';
import { NutricionService } from '../services/nutricion.service';
import { MensajesService } from '../services/mensajes.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ApiFitechService } from '../services/api-fitech.service';

@Component({
  selector: 'app-alimentos-no-like',
  templateUrl: './alimentos-no-like.page.html',
  styleUrls: ['./alimentos-no-like.page.scss'],
})
export class AlimentosNoLikePage implements OnInit {
  alimentos: unknown;
  // total array
  totalalimentos:number = 6;
  // ocultar
  verMas:boolean = true
  // activar clase
  active:any = []
  // este tipo de Datos no permite valores duplicado / es un array de tipo set
  grupoAlimentos = new Set()
  //array comun
  foods:any = []
  constructor(private service: NutricionService,
              private ruta: NavController,
              public loadingController: LoadingController,
              private apiService:ApiFitechService,
              private utilities: MensajesService) { }

   ngOnInit() {

    this.getFoods()

  }

  async getFoods(){
    this.presentLoading()
    const valor = await this.service.getFoods()
    this.loadingController.dismiss()
      if(valor == false ){
      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
      }else{
        this.alimentos = valor
        console.log("valor",valor)
      }
  }

  agrupar(id:any , index:any){
    // logica
    // si existe un registro borrar 
      if(this.grupoAlimentos.has(id)){
          const index2 = this.active.indexOf(index) 
          // Borrar en caso de que exista el valor
          this.active.splice(index2,1)
        console.log(this.active)
        return this.grupoAlimentos.delete(id)
      }  

    // Agregar si no existe
     this.active.push(index)
     this.grupoAlimentos.add(id)
     console.log(this.active)
  }
  
  async finalizar(){
    // destructuracion del array de set a un array normal    
    this.foods = [...this.grupoAlimentos]

    // if(Array.isArray(this.foods)  && this.foods.length){}
       console.log("array normal",this.foods)
       // esperar
       this.presentLoading()
         const validar = await this.service.foodNoDeseados(this.foods)
         this.loadingController.dismiss()
          if(validar){
             // esperar
             this.presentLoading2()
            const validar2 = await this.service.calculate_menu()
            this.loadingController.dismiss()
              if(validar2){
                 this.apiService.guardarnutricion()
                //  this.ruta.navigateForward(['/bateria-alimento'])
                 this.ruta.navigateForward(['/tutorial-alimentacion'])
              }else{
               this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
              }
          }else{
           this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
          }
    
   
  }

  atras(){
    this.ruta.pop();
  }

  ucFirst(str) {
    /*   str = str.replace(/ /g, "."); */
         return str.substring(0, 1).toUpperCase() + str.substring(1); 
     }

     async presentLoading() {
      const loading = await this.loadingController.create({
        message: 'Por favor espere...',
        cssClass: 'my-loading',
      });
      await loading.present();
    }

    async presentLoading2() {
      const loading = await this.loadingController.create({
        message: 'Estamos calculando su menú',
        cssClass: 'my-loading',
      });
      await loading.present();
    }

    total(){
      this.totalalimentos  = 200
      // ocultar
      this.verMas = false
    }

    getClass(index){
      // busca si un elemento se encuentra en el array y devuelve una clase
      return  this.active.includes(index) ? 'selecionado' : ''
    }

}
