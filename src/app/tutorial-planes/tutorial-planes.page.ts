import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { ApiFitechService } from '../services/api-fitech.service';

@Component({
  selector: 'app-tutorial-planes',
  templateUrl: './tutorial-planes.page.html',
  styleUrls: ['./tutorial-planes.page.scss'],
})
export class TutorialPlanesPage implements OnInit {
  @ViewChild('slide' , {static: true} ) slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  
  constructor(private ruta:NavController,private service: ApiFitechService) { }

  ngOnInit() {
  }

  omitir(){
    this.service.ActualizarFittechApp()
    this.ruta.navigateRoot(['/'])
  }

}
