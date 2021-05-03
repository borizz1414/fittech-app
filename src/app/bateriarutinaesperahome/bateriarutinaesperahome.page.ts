import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiFitechService } from '../services/api-fitech.service';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-bateriarutinaesperahome',
  templateUrl: './bateriarutinaesperahome.page.html',
  styleUrls: ['./bateriarutinaesperahome.page.scss'],
})
export class BateriarutinaesperahomePage implements OnInit {
  dataRecibida:any
  tiempo:any
  timeLeft: number;
  contador
  ejercipro
  descanso
  tiemposegundo
  //sonido
  sonido = "../../../assets/sonido/reloj.mp3"
  sonido2 = "../../../assets/sonido/final.mp3"
  audio:any
  zero:any
  recuperarRutina:any
  imagen
  nombre
  mostrartitulo = false
  contator_: any;
  secuence: any;
  restar: any;
  constructor(private capturar:ActivatedRoute , private ApiService:ApiFitechService,
              private ruta:NavController) { 

      }


  async ngOnInit() {
    //  aca vas hacer la logica para que no se pierda la referencia de los datos
    console.log(this.ApiService.rutina)
    //  parametros del id
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    this.contador = parseInt(this.dataRecibida) + 1

    // 
    this.ejercipro =  this.ApiService.rutina[this.contador]
    this.nombre = this.ejercipro.name

    this.imagen = `http://fittech247.com/fittech/imagenes/${this.ejercipro.cod}/${this.ejercipro.id}.jpg`
    console.log(this.imagen)
    this.capturar.queryParams.subscribe(params => {
      let data = params["count"];
      let secuence = params["secuence"];
      let restar = params["restar"];
      if(data) this.contator_ = data;
      if(secuence) this.secuence = secuence;
      if(restar) this.restar = restar;
  });

    this.timeLeft =  this.ApiService.rest
      this.startTimer()
  }



  startTimer() {

    this.tiemposegundo = setInterval(() => {

      if(this.timeLeft === 10){
        this.mostrartitulo = true
      }

      if(this.timeLeft <= 10){
        console.log("activate")
        this.zero = 0
      } 
      
      if(this.timeLeft >= 1 && this.timeLeft < 10) {
  
          this.playSonido()
      }

      // if(this.timeLeft === 1) {
      //     this.playSonidoFinal()
      // }


      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
        this.redirigir()
      }
    },1000)

  }

  ionViewDidLeave(){
    clearInterval(this.tiemposegundo)
    if(this.audio){
      this.audio.pause()
    }
  }

  redirigir(){
    clearInterval(this.tiemposegundo)
    this.contator_++;
    let navigationExtras: NavigationExtras = {
      queryParams: {
          count: this.contator_,
          secuence: this.secuence
      }
    }
    this.ruta.navigateRoot([`/bateriarutinahome/${this.contador}`], navigationExtras)
    this.pauseSonido()
  }

  ngOnDestroy(){
    clearInterval(this.tiemposegundo)
    if(this.audio){
      this.audio.pause();
    }
  }
  ionViewWillLeave(){
    clearInterval(this.tiemposegundo)
    if(this.audio){
      this.audio.pause();
    }
  }


   playSonido(){
  this.audio = new Audio();
  this.audio.src = this.sonido;
  this.audio.load();
  this.audio.play();
  }

  // playSonidoFinal(){
  // this.audio = new Audio();
  // this.audio.src = this.sonido2;
  // this.audio.load();
  // this.audio.play();
  // }
  
  pauseSonido(){
    if (this.audio) {
      this.audio.pause()
    }
  }

  atras(){
    clearInterval(this.tiemposegundo) 
    if(this.contador != 1){
      this.contador--;
    }
    let navigationExtras: NavigationExtras = {
      queryParams: {
          count: this.contador,
          secuence: this.secuence
      }
    }
   
    this.ruta.navigateForward([`/bateriarutinahome/${this.contador}`], navigationExtras)
  }
  
  


}
