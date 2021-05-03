import { NavController } from "@ionic/angular";
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiFitechService } from "../services/api-fitech.service";
import { environment } from "src/environments/environment";
@Component({
  selector: "app-bateria-remplazo",
  templateUrl: "./bateria-remplazo.page.html",
  styleUrls: ["./bateria-remplazo.page.scss"],
})
export class BateriaRemplazoPage implements OnInit {
  @ViewChild("myVideo", { static: false }) txtVideo: ElementRef;
  mostrar: boolean = true;
  URL = environment.url
  exercise: any;
  name;
  repeticion;
  timeLeft: number;
  tiemposegundo;
  buscador: any;
  results: any;
  video: any;
  poster: any;
  zero: any;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private ApiService: ApiFitechService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.exercise = JSON.parse(params["data"]);
      this.name = this.exercise.name;
      this.video = `${this.URL}/videos/${this.exercise.cod}/${this.exercise.url}`;
      this.timeLeft = this.ApiService.ratio;
      this.startTimer();
    });
  }

  atras() {
    this.navCtrl.pop();
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
    clearInterval(this.tiemposegundo);
    this.timeLeft = this.repeticion;
    this.zero = null;
  }

  //CONOMETRO
  startTimer() {
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
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  }
}
