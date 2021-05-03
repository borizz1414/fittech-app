import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiFitechService } from "../services/api-fitech.service";
import { environment } from '../../environments/environment.prod';

@Component({
  selector: "app-bateria",
  templateUrl: "./bateria.page.html",
  styleUrls: ["./bateria.page.scss"],
})
export class BateriaPage implements OnInit {
  @ViewChild("myVideo", { static: false }) txtVideo: ElementRef;
  mostrar: boolean = true;
  URL = environment.url
  constructor(
    private capturar: ActivatedRoute,
    private ruta: Router,
    private ApiService: ApiFitechService
  ) {}
  dataRecibida: any;
  nombre;
  repeticion;
  timeLeft: number;
  tiemposegundo;
  buscador: any;
  encontrar: any;
  video: any;
  poster: any;
  zero: any;
  ngOnInit() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get("id");

    //Carga el nombre del ejercicio
    this.nombre = this.ApiService.demostracionEjercicio.nombre;
    //carga la serie de ejericios
    this.buscador = this.ApiService.rutina;
    //haya el ejercicio
    this.encontrar = this.buscador.find((value) => {
      return value.name == this.nombre;
    });

    // los videos
    this.video = `${this.URL}/videos/${this.encontrar.cod}/${this.encontrar.url}`;

    //tiempo del ejericio
    this.timeLeft = this.ApiService.ratio;

    this.startTimer();
  }

  atras() {
    this.ruta.navigateByUrl("entrenamientos");
    this.pauseVideo();
  }

  pauseVideo() {
    this.mostrar = false;
    this.txtVideo.nativeElement.pause();
    clearInterval(this.tiemposegundo);
  }
  playVideo() {
    this.mostrar = true;
    this.txtVideo.nativeElement.play();
    this.startTimer();
  }

  fullscreen() {
    if (this.txtVideo.nativeElement.requestFullscreen) {
      this.txtVideo.nativeElement.requestFullscreen();
    } else if (this.txtVideo.nativeElement.mozRequestFullScreen) {
      /* Firefox */
      this.txtVideo.nativeElement.mozRequestFullScreen();
    } else if (this.txtVideo.nativeElement.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      this.txtVideo.nativeElement.webkitRequestFullscreen();
    } else if (this.txtVideo.nativeElement.msRequestFullscreen) {
      /* IE/Edge */
      this.txtVideo.nativeElement.txtVideo.nativeElementm.msRequestFullscreen();
    }
  }

  videoEnd() {
    this.mostrar = false;
    // this.txtVideo.nativeElement.currentTime = 1;
    clearInterval(this.tiemposegundo);
    this.timeLeft = this.repeticion;
    this.zero = null;
  }

  //CONOMETRO
  startTimer() {
    // if(this.timeLeft = 0){
    //   this.minuto--
    //   this.timeLeft = 60
    // }

    this.tiemposegundo = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;

        if (this.timeLeft < 10) {
          console.log("activate");
          this.zero = 0;
        }
      } else {
        this.zero = null;
        this.timeLeft = 0;
        this.timeLeft = this.repeticion;
      }
    }, 1000);
  }

  //SE OBTIENE LA DURACION DEL VIDEO
  onMetadata(e, video) {
    console.log("metadata: ", e);
    console.log("cargado: ", e.target.readyState);
    this.repeticion = parseInt(e.target.duration);
    this.timeLeft = parseInt(e.target.duration);
  }

  // mayuscula
  ucFirst(str) {
    /*   str = str.replace(/ /g, "."); */
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  }
}
