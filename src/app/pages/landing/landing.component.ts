import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
login(){
  this.navCtrl.navigateRoot('/login');
}
}
