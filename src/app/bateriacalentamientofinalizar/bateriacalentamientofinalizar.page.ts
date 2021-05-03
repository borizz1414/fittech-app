import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bateriacalentamientofinalizar',
  templateUrl: './bateriacalentamientofinalizar.page.html',
  styleUrls: ['./bateriacalentamientofinalizar.page.scss'],
})
export class BateriacalentamientofinalizarPage implements OnInit {

  constructor(private ruta:NavController) { }

  ngOnInit() {
  }

  siguiente(){
    this.ruta.navigateRoot(["/rutina-entrenamiento"])
  }

}
