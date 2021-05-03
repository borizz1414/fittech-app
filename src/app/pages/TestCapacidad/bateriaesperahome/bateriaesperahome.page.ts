import { Component, OnInit } from '@angular/core';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bateriaesperahome',
  templateUrl: './bateriaesperahome.page.html',
  styleUrls: ['./bateriaesperahome.page.scss'],
})
export class BateriaesperahomePage implements OnInit {
  dataRecibida:any
    tiempo:any
    timeLeft: number = 5;
  contador
  ejercipro
  constructor(private capturar:ActivatedRoute , private ApiService:ApiFitechService,private ruta:Router) { }
  

  ngOnInit() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
      this.contador = parseInt(this.dataRecibida) + 1

    this.startTimer()
      
    if(this.ApiService.genero == 1){
     this.ejercipro = this.ApiService.rutinaTestCasaHombre[this.contador]['name']
    }

    if(this.ApiService.genero == 2){
      this.ejercipro = this.ApiService.rutinaTestCasaMujer[this.contador]['name']
     }
       

      console.log(this.dataRecibida)
      
    this.tiempo = setTimeout(()=>{
      console.log("guardando energia - redirigir")
      this.ruta.navigateByUrl(`bateriahome/${this.contador}`)
    },5000)

  }

    startTimer() {

    setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
      }
    },1000)
  

  }

}
