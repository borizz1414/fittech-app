import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tutorial-alimento-paso4',
  templateUrl: './tutorial-alimento-paso4.component.html',
  styleUrls: ['./tutorial-alimento-paso4.component.scss'],
})
export class TutorialAlimentoPaso4Component implements OnInit {
  URL = environment.url;
  constructor(private apiService:ApiFitechService,private ruta:NavController) { }
  video2:any
  video3:any
  video4:any
  pasar:any;


  ngOnInit() {
    this.video2 = `${URL}/videos/tutoriales/t5.mp4`
    this.video3 = `${URL}/videos/tutoriales/t3.mp4`
    this.video4 = `${URL}/videos/tutoriales/t4.mp4`
  }

  saltar(){
    this.apiService.guardartutorial(true)
    this.ruta.navigateRoot(['/bateria-alimento'])
  }

}
