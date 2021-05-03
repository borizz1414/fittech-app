import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiFitechService } from 'src/app/services/api-fitech.service';

@Component({
  selector: 'app-tutorial-planes-paso3',
  templateUrl: './tutorial-planes-paso3.component.html',
  styleUrls: ['./tutorial-planes-paso3.component.scss'],
})
export class TutorialPlanesPaso3Component implements OnInit {

  constructor(private ruta:NavController,private service: ApiFitechService) { }

  ngOnInit() {}
  omitir(){
    this.service.ActualizarFittechApp()
    this.ruta.navigateRoot(['/login'])
  }
}
