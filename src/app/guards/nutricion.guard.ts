import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { ApiFitechService } from '../services/api-fitech.service';

@Injectable({
  providedIn: 'root'
})
export class NutricionGuard implements CanActivate {
  constructor(
    private navCtrl: NavController,
    private service: ApiFitechService
) { }

  async canActivate() {
    //Validamos que exista la nutricion en el usuario
    const comprobar = await this.service.obtenerUsuario()
    //Validamos que exista la nutricion en el cache
    const nutricion = await this.service.cargarnutricion()
    //Validamos que exista el test home
    const validar = await this.service.obtenerRutinaHome()

    if(validar == true){
      if(nutricion === 'activado' || comprobar['food_measures'] !== null){
        this.navCtrl.navigateForward('/tutorial-alimentacion');
          return true;
      }else{
        this.navCtrl.navigateForward('/actividad');
        return true;
      }

    }else{
       return false;
    }

}
  
}
