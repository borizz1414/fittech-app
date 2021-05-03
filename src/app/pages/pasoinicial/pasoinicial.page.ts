import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-pasoinicial',
  templateUrl: './pasoinicial.page.html',
  styleUrls: ['./pasoinicial.page.scss'],
})
export class PasoinicialPage implements OnInit {
  @ViewChild(IonContent,{static:false}) content: IonContent
  @ViewChild('slide' , {static: true} ) slides: IonSlides;
  contador:number = 1
  progreso:number = 1
  progresoReversa:number
  contadordos:number
  condicionalCss:boolean = true
  slideshow: number = 2;
  progressbar: number = 0.3;
  ocultar = true
  constructor( private navctrl: NavController) {}

  ngOnInit() {
    this.slides.lockSwipes(true)
    console.log(this.condicionalCss)
  }

  cambiar(valor){
      
      if(valor==0){
        //condicional para el diseño css
        this.condicionalCss = true
        //condicional para el cambio de pantallas
        this.slides.lockSwipes(false)
        this.slides.slideTo(0)
         //logica de la barra superior
        this.contador = 1
        if(valor < 2){
          this.restarprogreso(3)
        }else{
          this.progresar(3)
          this.progresoReversa = this.contador
        }
        //condicional para bloquear pantalla
        this.slides.lockSwipes(true)
      }
      if(valor==1){
         //condicional para el diseño css
        this.condicionalCss = true
        //condicional para el cambio de pantallas
       /*  document.getElementById("slide2").classList.add('animacion','fadeInRight') */
       this.slideshow = 2;
       this.progressbar = 0.3;
        this.slides.lockSwipes(false)
        this.slides.slideTo(1)
        //logica de la barra superior
        this.contador = 1
        if(this.progresoReversa >= 3){
          this.restarprogreso(3)
        }else{
          this.progresar(3)
        }
        this.progresoReversa = this.contador
        //condicional para bloquear pantalla
        this.slides.lockSwipes(true)

      }
      if(valor==2){
        //condicional del diseño css
        this.condicionalCss = false
        //condicional para el cambio de pantallas
       /*  document.getElementById("slide3").classList.add('animacion','fadeInRight') */
       this.slideshow = 3;
       this.progressbar = 0.6;
        this.slides.lockSwipes(false)
        this.slides.slideTo(2)
        //logica para barra superior
        this.contador = 2
        this.progresoReversa = this.contador
        if(this.progresoReversa == 4){
          this.restarprogreso(3)
        }else{
          this.progresar(3)
        }
        //condicional para bloquear pantalla
        this.slides.lockSwipes(true) 
      }
      if(valor==3){

        document.getElementById("slide4").classList.add('animacion','fadeInRight')
        this.slides.lockSwipes(false)
        this.slides.slideTo(3)
        this.contador = 4
        this.progresoReversa = this.contador
        this.progresar(2)
        this.contadordos = 5
      }
      if(valor==4){
        this.slides.lockSwipes(false)
        this.slides.slideTo(2)
        this.contador = 3
        this.progresoReversa = this.contador
        this.restarprogreso(2)
      }
        
  }

  progresar(valor){
    this.progreso +=valor
  }

  restarprogreso(valor){
    this.progreso -=valor
  }

  back(event){
    this.navctrl.back();
  }
  siguiente(event){
    this.contador++;
    this.progressbar = 1;
    this.slideshow++;
  }
 
  bajar(){
    this.content.scrollToBottom(1500)
    this.ocultar = false
  }

  arriba(){
    this.content.scrollToTop(1500)
    this.ocultar = true
  }



}
