import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiFitechService } from 'src/app/services/api-fitech.service';

@Component({
  selector: 'app-tutorial-planes-paso2',
  templateUrl: './tutorial-planes-paso2.component.html',
  styleUrls: ['./tutorial-planes-paso2.component.scss'],
})
export class TutorialPlanesPaso2Component implements OnInit {

  constructor(private ruta:NavController,private service: ApiFitechService) { }

  ngOnInit() {}
  omitir(){
    this.service.ActualizarFittechApp()
    this.ruta.navigateRoot(['/login'])
  }
}
