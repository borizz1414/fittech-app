import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiFitechService} from '../services/api-fitech.service';


@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(
    private navCtrl: NavController,
    private service: ApiFitechService
) { }

  async canActivate() {
    const guard = await this.service.cargarFittechApp()
        console.log(guard)

      if(guard){
          this.navCtrl.navigateRoot('/login');
          return false;
      }else{
          return true;
      }
    
    }

}