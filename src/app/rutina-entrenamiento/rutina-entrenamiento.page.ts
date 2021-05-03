import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  RutinasService
} from '../rutinas.service';
import {
  NavController, AlertController
} from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { threadId } from 'worker_threads';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-rutina-entrenamiento',
  templateUrl: './rutina-entrenamiento.page.html',
  styleUrls: ['./rutina-entrenamiento.page.scss'],
})
export class RutinaEntrenamientoPage implements OnInit {
  @ViewChild('myVideo', {static: false}) txtVideo: ElementRef;
  rutinas: any = [];
  URL = environment.url
  status = 'rutina';
  identificador:any;
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
  pausarApp:any
  ReanudarAPP:any
  arraytemp:any = []
  nombre : any;

  constructor(private service: RutinasService, private navCtrl: NavController,public platform: Platform,
              public alertController: AlertController) {

      // SE SUBCRIBE CUANDO LA RUTINA ES PAUSADA
      this.pausarApp =  this.platform.pause.subscribe(async () => {
        this.pauseTimer()
     });
     // SE SUBCRIBE CUANDO LA RUTINA SE REANUDA
    this.ReanudarAPP =  this.platform.resume.subscribe(async () => {
        this.alerta()
     });

  }

  async ngOnInit() {
    this.data = await this.service.getRutina();

    const array1 = this.data['exercises']

      array1.forEach(element => {

        if(element.side > 1){
          const objetoClonado = Object.assign({}, element);
          objetoClonado.mostrar = 'derecha'
          const objetoClonado2 = Object.assign({}, element);
          objetoClonado2.mostrar = 'izquierda'
          this.arraytemp.push(objetoClonado)
          this.arraytemp.push(objetoClonado2)
        }else{
          this.arraytemp.push(element)
        }

      });
    
      console.log(this.arraytemp)
    this.setValues();
    this.startVideo();
  }
  setValues() {
    this.rutinas = this.arraytemp.filter(value => value.stage === this.secuencia);
    this.final = this.data['exercises'].length;
    this.total = this.rutinas.length;
    this.stages = this.data['stages'];
  }

/*   atras(){
    this.navCtrl.navigateRoot('/tabs/dashboard');
  } */

  async startVideo() {
    this.ready = false;
    this.setValues();
    this.identificador = this.rutinas[this.actual].mostrar

    this.video = `${this.URL}/videos/${this.rutinas[this.actual].cod}/${this.rutinas[this.actual].url}`
    console.log(this.video)
    this.mostrar = true;

    this.timeLeft = this.data['ratio_w'];
    var b = setInterval(() => {
      console.log(this.txtVideo.nativeElement.readyState)
      if (this.txtVideo.nativeElement.readyState === 4) {
        this.txtVideo.nativeElement.play();
        this.ready = true;
        //cronometro
        clearInterval(b);
        this.startTimer();
      }
    }, 800);
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
      console.log('Rutina', this.rutinas);
      if(this.secuencia == this.stages && this.actual == this.total){
        this.navCtrl.navigateRoot('/estiramientos')
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
    if (this.actual < 1 && this.secuencia <= 1) {
      clearInterval(this.tiemposegundo);
      this.navCtrl.pop();
    } else {
      clearInterval(this.tiemposegundo);
      this.timerDescanse();
      this.status = 'descanso';
    }
  }

  async timerDescanse(timerContinue = null) {
    this.zero = null;
    // this.imagen = `${this.URL}/imagenes/${this.rutinas[this.actual].cod}/${this.rutinas[this.actual].id}.jpg`;
    this.video2 = `${this.URL}/videos/${this.rutinas[this.actual].cod}/${this.rutinas[this.actual].url}`;
    console.log(this.video2);
    if(timerContinue){
      this.timeLeft = timerContinue;
    }else{
      this.timeLeft = this.data['ratio_r'];
    }
    this.tiemposegundo = setInterval(() => {
      if (this.timeLeft <= 10) {
        console.log("activate")
        this.zero = 0
      }

      if (this.timeLeft >= 1 && this.timeLeft < 5) {
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
    console.log(this.actual);
    console.log(this.secuencia)
    if (this.actual == 0 && this.secuencia > 1) {
      this.secuencia--;
      this.setValues();
      this.actual = this.total - 1;
      console.log(this.secuencia, this.actual);

      clearInterval(this.tiemposegundo);
      this.status = 'rutina';
      this.startVideo();
    } else {
      if (this.actual != 0) {
        this.actual--;
        this.status = 'rutina';
        this.startVideo();
      } else if (this.secuencia > 1) {
        this.secuencia--;
        this.setValues();
        this.actual = this.total - 1;
        this.status = 'rutina';
        this.startVideo();
      }
    }
  }

  siguiente_() {
    clearInterval(this.tiemposegundo);
    this.status = 'rutina';
    this.startVideo();
  }

async confirmation(){
  this.pauseTimer();
  const alert = await this.alertController.create({
    message: '<h2>Si finalizas aquí no contará la sesión<br>¿seguro quieres finalizar?</h2>',
    cssClass: 'customMensaje1',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        cssClass: 'cancelButton',
        handler: (blah) => {
         this.playTimer();
        }
      }, {
        text: 'Si',
        cssClass: 'confirmButton',
        handler: () => {
          clearInterval(this.tiemposegundo);
          this.timeLeft = -1;
          this.navCtrl.navigateRoot("tabs/dashboard")
        }
      }
    ]

  });

  await alert.present();
}
async confirmation2(){
  clearInterval(this.tiemposegundo);
  const alert = await this.alertController.create({
    header: 'La sesión ha sido pausada',
      cssClass: 'customMensaje1',
    buttons: [
      {
        text: 'Continuar',
        role: 'cancel',
        cssClass: 'cancelButton',
        handler: (blah) => {
         this.timerDescanse(this.timeLeft);
        }
      }, {
        text: 'Finalizar',
        cssClass: 'confirmButton',
        handler: () => {
          this.navCtrl.navigateRoot("tabs/dashboard")
        }
      }
    ]

  });

  await alert.present();
}


  // mensaje de reanudar
  async alerta() {
    const alert = await this.alertController.create({
      header: 'La sesión ha sido pausada',
      cssClass: 'customMensaje1',
      buttons: [
        {
          text: 'Continuar',
          role: 'cancel',
          cssClass: 'cancelButton',
          handler: (blah) => {
            this.playTimer();
          }
        }, {
          text: 'Finalizar',
          cssClass: 'confirmButton',
          handler: () => {
            // mensaje confirmacion
            this.confirmarSalida()
          }
        }
      ]

    });

    await alert.present();
  }
  // mensaje de reanudar
  async confirmarSalida() {
    const alert = await this.alertController.create({
      header: 'Si finalizas aquí no contará la sesión ¿seguro quieres finalizar?',
      cssClass: 'customMensaje1',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'cancelButton',
          handler: (blah) => {
            if( this.status == 'descanso'){
              this.siguiente_()
            }else{
              this.playTimer()
            };
          }
        }, {
          text: 'Si',
          cssClass: 'confirmButton',
          handler: () => {
            clearInterval(this.tiemposegundo) 
            this.navCtrl.navigateRoot("tabs/dashboard")
          }
        }
      ]

    });

    await alert.present();
  }



  // cierra la subcripcion
  ionViewWillLeave(){
    console.log("cerrar la supcripcion")
    clearInterval(this.tiemposegundo)
    if(this.audio){
      this.audio.pause();
    }
    this.ReanudarAPP.unsubscribe();
    this.pausarApp.unsubscribe();
  }













}