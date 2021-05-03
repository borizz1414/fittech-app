import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calentamiento',
  templateUrl: './calentamiento.page.html',
  styleUrls: ['./calentamiento.page.scss'],
})
export class CalentamientoPage implements OnInit {

  constructor(private ruta:Router , private avanzar:NavController) { }

  ngOnInit() {
  }

  atras(){
    this.ruta.navigateByUrl("entrenamientos")
  }

  siguiente(){

    this.ruta.navigateByUrl("calentamientodos")

  }


}
