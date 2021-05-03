import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-test-fuerza-info',
  templateUrl: './test-fuerza-info.page.html',
  styleUrls: ['./test-fuerza-info.page.scss'],
})
export class TestFuerzaInfoPage implements OnInit {

  constructor(private ruta:NavController) { }

  ngOnInit() {
  }

  manual(){
    this.ruta.navigateForward('test-fuerza-manual')
  }

  test(){
    this.ruta.navigateForward('test-fuerza-categoria')
  }

}
