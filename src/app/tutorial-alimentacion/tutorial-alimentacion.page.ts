import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tutorial-alimentacion',
  templateUrl: './tutorial-alimentacion.page.html',
  styleUrls: ['./tutorial-alimentacion.page.scss'],
})
export class TutorialAlimentacionPage implements OnInit {
  @ViewChild('slide' , {static: true} ) slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  
  constructor() { }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.slides.slideTo(0)
}



}
