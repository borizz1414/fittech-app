import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-comparacion',
  templateUrl: './modal-comparacion.page.html',
  styleUrls: ['./modal-comparacion.page.scss'],
})
export class ModalComparacionPage implements OnInit {
  @Input() imagen;
  image: string;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.image = this.imagen
  }

  salir(){
    this.modalController.dismiss()
  }

}
