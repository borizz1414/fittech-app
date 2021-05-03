import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiFitechService } from '../services/api-fitech.service';

@Injectable({
  providedIn: 'root'
})
export class TutorialGuard implements CanActivate {
  pasar:any
  constructor(
    private navCtrl: NavController,
    private service: ApiFitechService
) { }

  async canActivate() {

     this.pasar  = await this.service.cargarTutorial()
    if(this.pasar){
     this.navCtrl.navigateRoot(['/bateria-alimento'])
     console.log("pasar", this.pasar )
     return true
    }else{
      console.log("pasar",this.pasar)
      return true;
    }
  

}



  
}
