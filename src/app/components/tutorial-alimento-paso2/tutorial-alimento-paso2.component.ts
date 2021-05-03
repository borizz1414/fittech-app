import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tutorial-alimento-paso2',
  templateUrl: './tutorial-alimento-paso2.component.html',
  styleUrls: ['./tutorial-alimento-paso2.component.scss'],
})
export class TutorialAlimentoPaso2Component implements OnInit {
  pasar:any;
  videoURL:SafeResourceUrl;

  constructor(private apiService:ApiFitechService,private ruta:NavController,
    private domsegunridad:DomSanitizer
    ) { }

   ngOnInit() {
    this.videoURL = this.domsegunridad.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/nXPwfIF7wFI");
  }

  saltar(){
    this.apiService.guardartutorial(true)
    this.ruta.navigateRoot(['/bateria-alimento'])
  }

}
