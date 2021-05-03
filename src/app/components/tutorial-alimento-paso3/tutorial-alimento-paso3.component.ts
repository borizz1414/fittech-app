import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tutorial-alimento-paso3',
  templateUrl: './tutorial-alimento-paso3.component.html',
  styleUrls: ['./tutorial-alimento-paso3.component.scss'],
})
export class TutorialAlimentoPaso3Component implements OnInit {
  video1:any
  pasar:any;
  URL = environment.url
  constructor(private apiService:ApiFitechService,private ruta:NavController) { }

  ngOnInit() {
    this.video1 = `${this.URL}/videos/Tutoriales/t1.mp4`
  }


  saltar(){
    this.apiService.guardartutorial(true)
    this.ruta.navigateRoot(['/bateria-alimento'])
  }

}
