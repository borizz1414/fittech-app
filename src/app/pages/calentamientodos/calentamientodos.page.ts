import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calentamientodos',
  templateUrl: './calentamientodos.page.html',
  styleUrls: ['./calentamientodos.page.scss'],
})
export class CalentamientodosPage implements OnInit {

  constructor(private ruta:Router , private avanzar:NavController) { }

  ngOnInit() {
  }

  atras(){
    this.avanzar.pop();
  }

  siguiente(){
    // ["/bateriarutinahome/0"]
    this.avanzar.navigateForward(["/calentamiento-info"])
  }

}
