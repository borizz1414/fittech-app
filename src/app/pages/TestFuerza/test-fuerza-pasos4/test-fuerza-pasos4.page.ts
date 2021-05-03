import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { ApiFitechService } from 'src/app/services/api-fitech.service';

@Component({
  selector: 'app-test-fuerza-pasos4',
  templateUrl: './test-fuerza-pasos4.page.html',
  styleUrls: ['./test-fuerza-pasos4.page.scss'],
})
export class TestFuerzaPasos4Page implements OnInit {
  nombre:any
  id:any
  power = {
    valor:null
  }
  identificador:any
  constructor(private apiService:ApiFitechService,    private usuarioservicio:UsuarioService , private route:Router , private picker:PickerController) { }


  ionViewWillEnter() {
    if(this.usuarioservicio.selecionTestEjercicio.pressbanca){
      this.nombre = 'Press banca'
      this.id = 'banca'
      this.identificador = 1
      document.getElementById("banca").classList.add('realizado')

   }
   if(this.usuarioservicio.selecionTestEjercicio.squat){
     this.nombre = 'Squat'
     this.id = 'squat'
     this.identificador = 3
     document.getElementById("squat").classList.add('realizado')
  }
  if(this.usuarioservicio.selecionTestEjercicio.legcurl){
     this.nombre = 'Leg curl'
     this.id = 'curl'
     this.identificador = 2
     document.getElementById("curl").classList.add('realizado')

  }

  if(this.usuarioservicio.selecionTestEjercicio.legextension){
   this.nombre = 'Leg extension'
   this.id = 'extension'
   this.identificador = 4
   document.getElementById("squat").classList.add('realizado')

  }
  
}

  ngOnInit() {
     //this.id = this.ruta.snapshot.paramMap.get('id')
       
    /*   
    if(this.id == 'banca'){
       this.nombre = 'Press banca'
    }
    if(this.id == 'squat'){
      this.nombre = 'Squat'
   }
   if(this.id == 'curl'){
    this.nombre = 'Leg curl'
   }
   if(this.id == 'extension'){
    this.nombre = 'Leg extension'
   }
   */  

  }

  peso(valor){
    console.log(valor.detail.value)
  }


 async siguiente(){

  if(this.power.valor == null || this.power.valor == 0){
    return
  } else{
     
    if(this.identificador == 1){
      this.apiService.recolectarTestFuerza(this.power.valor , this.identificador)
      this.route.navigateByUrl('/test-fuerza-categoria')
    }

    if(this.identificador == 2){
      this.apiService.recolectarTestFuerza(this.power.valor , this.identificador)
      this.route.navigateByUrl('/test-fuerza-categoria')
    }

    if(this.identificador == 3){
      this.apiService.recolectarTestFuerza(this.power.valor , this.identificador)
      this.route.navigateByUrl('/test-fuerza-categoria')
    }

    if(this.identificador == 4){
      this.apiService.recolectarTestFuerza(this.power.valor , this.identificador)
      this.route.navigateByUrl('/test-fuerza-categoria')
    }
   
   
  }

  
  }



  /*  

    if(this.power.valor == null || this.power.valor == 0){
      return
    } else{
        
      if(this.usuarioservicio.selecionTestEjercicio.pressbanca){
      this.apiService.ejercicios.resultado = this.power.valor
     }
     if(this.usuarioservicio.selecionTestEjercicio.squat){
      this.apiService.ejercicios.resultado = this.power.valor
    }
    if(this.usuarioservicio.selecionTestEjercicio.legcurl){
      this.apiService.ejercicios.resultado = this.power.valor
    }
  
    if(this.usuarioservicio.selecionTestEjercicio.legextension){
      this.apiService.ejercicios.resultado = this.power.valor
    }
      

    let opts: PickerOptions = {
      buttons: [
      {
        text:'Cancel',
        role:'cancel'
      },
      {
        text:'confirmar'
      }
      ],
      columns:[
        {
          name:'unidad de peso',
          options:[
            {text:'kilos',value:'A'},
            {text:'libras',value:'B'}
          ]
        }
      ]
    }
    let picker = await this.picker.create(opts)
    picker.present()
    picker.onDidDismiss().then(async data=>{
      let col = await picker.getColumn('unidad de peso')
      console.log('columna',col)
      this.selecion = col.options[col.selectedIndex].text
      this.route.navigateByUrl('/test-fuerza-categoria');

    })
      
  }

  */




}
