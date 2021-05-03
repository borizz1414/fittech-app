import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NutricionService } from '../services/nutricion.service';
import { PaypalService } from '../services/paypal.service';


declare var paypal;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
})
export class PaypalPage implements OnInit {
  @ViewChild('paypal' , {static:true}) paypalElement: ElementRef;

  product = {
    price:55,
    description:'plan estandar',
  };

  paidFor:boolean = false;
  id:string = 'AWoxBafpovhm2Dtp-MzfiXvJ84fHkYcYkT7TH8G-N2l5VRSjTu7DMAn55fWjmj-hQulJ9G4EUeAPSsNx'

  constructor(private PaypalService:PaypalService
              ) { }

  ngOnInit(){

    this.PaypalService.initiate(this.id).subscribe(
      () => paypal.Buttons({
          // THE REST IS JUST TYPICAL PAYPAL BUTTON STUFF.
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: 'USD',
                    value: this.product.price,
                  }
                }
              ]
            });
          },
    
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            console.log(order);
          }
        }).render(this.paypalElement.nativeElement)
    );


  }

  ngOnDestroy(){
    this.PaypalService.remove()
  }




  }



