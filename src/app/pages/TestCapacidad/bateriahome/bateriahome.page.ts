import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
declare var require: any

var lib = require('mugan86-cronometro');
@Component({
  selector: 'app-bateriahome',
  templateUrl: './bateriahome.page.html',
  styleUrls: ['./bateriahome.page.scss'],
})
export class BateriahomePage implements OnInit {
  @ViewChild('myVideo', {static: false}) txtVideo: ElementRef;
  rutinas: any = [];
  status = 'rutina';
  secuencia = 1;
  actual = 0;
  total: number;
  video: string;
  video2: string;
  btn: boolean;
  tiemposegundo: NodeJS.Timeout;
  timeLeft: number;
  zero: number;
  mostrar: boolean = true;
  audio: HTMLAudioElement;
  sonido = "../../../assets/sonido/reloj.mp3";
  sonido2 = "../../../assets/sonido/campana.mp3";
  imagen: string;
  data: any = [];
  final: any;
  stages: number;
  ready: boolean;
  constructor(private capturar:ActivatedRoute , private ApiService:ApiFitechService,private ruta:Router,
    private navCtrl: NavController) {

    //codigo para videos
   if(this.ApiService.genero == 1){
    this.data =  this.ApiService.rutinaTestCasaHombre
    }

    if(this.ApiService.genero == 0){
      this.data =  this.ApiService.rutinaTestCasaMujer
     }

   }



   async ngOnInit() {
    this.capturar.snapshot.paramMap.get('id')
    this.setValues();
    this.startVideo();
  }

  setValues() {
    console.log(this.data)
    this.final = this.data.length;
    this.total = this.data.length;
  }

  async startVideo() {
    this.ready = false;
    this.setValues();
    console.log(this.data[this.actual].url)
    this.video = this.data[this.actual].url
    this.mostrar = true;
    this.timeLeft = 40;
    var b = setInterval(() => {
      console.log(this.txtVideo.nativeElement.readyState)
      if (this.txtVideo.nativeElement.readyState === 4) {
        this.txtVideo.nativeElement.play();
        this.ready = true;
        //cronometro
        clearInterval(b);
        this.startTimer();
      }
    }, 500);
  }

  startTimer() {
    this.btn = true;
    this.zero = null;
    this.tiemposegundo = setInterval(() => {

      if (this.timeLeft <= 10) {
        console.log("activate")
        this.zero = 0
      }

      if (this.timeLeft === 1) {
        this.playSonido(2)
      }

      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
        this.siguiente();
        this.txtVideo.nativeElement.pause()
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.tiemposegundo);
    this.mostrar = false
    this.txtVideo.nativeElement.pause()
  }

  playTimer() {
    this.startTimer()
    this.mostrar = true
    this.txtVideo.nativeElement.play()
  }

  playSonido(valor) {
    this.audio = new Audio();
    if(valor == 1){   
      this.audio.src = this.sonido;
    }else{
      this.audio.src = this.sonido2;
    }
    this.audio.load();
    this.audio.play();
  }



  siguiente() {

    if (this.actual == this.total) {
      this.actual = 0;
      this.secuencia++;
      clearInterval(this.tiemposegundo);
      this.timerDescanse();
      this.status = 'descanso';
    } else {
      this.actual++;
      console.log('Actual', this.actual);
      console.log('total', this.total);
      console.log('Rutina', this.data);
      if(this.actual == 16){
        clearInterval(this.tiemposegundo);
        this.navCtrl.navigateRoot('mensajecapacidad/16')
      }else if (this.actual == this.total) {
        this.secuencia++;
        this.actual = 0;
        this.setValues();
        clearInterval(this.tiemposegundo);
        this.timerDescanse();
        this.status = 'descanso';
      } else{
        clearInterval(this.tiemposegundo);
        this.timerDescanse();
        this.status = 'descanso';
      }
    }

  }

  atras() {
    if (this.actual < 1) {
      clearInterval(this.tiemposegundo);
      // this.navCtrl.pop();
    } else {
      clearInterval(this.tiemposegundo);
      this.actual = this.actual - 1
      this.timerDescanse();
      this.status = 'descanso';
    }
  }

  async timerDescanse() {
    this.zero = null;
    // this.imagen = `http://fittech247.com/fittech/imagenes/${this.data['ejercicios Calentamiento'][this.actual].cod}/${this.data['ejercicios Calentamiento'][this.actual].id}.jpg`;
    this.video2 =  this.data[this.actual].url;
    this.timeLeft = 5;
    this.tiemposegundo = setInterval(() => {


      if (this.timeLeft >= 1 && this.timeLeft < 10) {
        this.playSonido(1)
      }
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
        this.siguiente_();
      }
    }, 1000)
  }


  atras_() {
    clearInterval(this.tiemposegundo);
    this.status = 'rutina';
    this.startVideo();
  }



  siguiente_() {
    clearInterval(this.tiemposegundo);
    this.status = 'rutina';
    this.startVideo();
  }


  finalizar(){
    // clearInterval(this.tiemposegundo);
    this.pauseTimer()
    this.navCtrl.navigateRoot(`mensajecapacidad/${this.actual}`)
  }


  // cierra la subcripcion
  ionViewWillLeave(){
     this.audio.pause()
  }







  }