import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss'],
})
export class BackBtnComponent implements OnInit {

  constructor( private navCtrl: NavController) { }

  ngOnInit() {}

  atras(){
    this.navCtrl.pop();
  }
}
