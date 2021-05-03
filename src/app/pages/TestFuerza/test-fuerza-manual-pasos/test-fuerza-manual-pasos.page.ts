import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFitechService } from 'src/app/services/api-fitech.service';

@Component({
  selector: 'app-test-fuerza-manual-pasos',
  templateUrl: './test-fuerza-manual-pasos.page.html',
  styleUrls: ['./test-fuerza-manual-pasos.page.scss'],
})
export class TestFuerzaManualPasosPage implements OnInit {
  dataRecibida:any
  nombre:any
  id:number
  power = {
    valor:null
  }
  identificador:any


  constructor(private capturar:ActivatedRoute,private apiService:ApiFitechService,private route:Router) { }

  ngOnInit() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
       if(this.dataRecibida === '1') {
         this.nombre = "Press banca"
         this.id = 1
         this.identificador = 1

       }

       if(this.dataRecibida === '2') {
          this.nombre = "Leg curl"
          this.id = 2
          this.identificador = 2

      }

      if(this.dataRecibida === '3') {
           this.nombre ="Squat"
           this.id = 3
           this.identificador = 3
      }

  }
  peso(e){
    
  }
  siguiente(){

    if(this.power.valor == null || this.power.valor == 0){
      return
    } else{
      if(this.identificador == 1){
        this.apiService.recolectarTestFuerza(this.power.valor , this.identificador)
        document.getElementById("banca").classList.add('realizado')
        this.route.navigateByUrl('/test-fuerza-manual')
      }
  
      if(this.identificador == 2){
        this.apiService.recolectarTestFuerza(this.power.valor , this.identificador)
        document.getElementById("curl").classList.add('realizado')
        this.route.navigateByUrl('/test-fuerza-manual')
      }
  
      if(this.identificador == 3){
        this.apiService.recolectarTestFuerza(this.power.valor , this.identificador)
        document.getElementById("squat").classList.add('realizado')
        this.route.navigateByUrl('/test-fuerza-manual')
      }
    }

  }

}
