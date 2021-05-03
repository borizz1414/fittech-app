import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateriaAlimentoPage } from './bateria-alimento.page';

describe('BateriaAlimentoPage', () => {
  let component: BateriaAlimentoPage;
  let fixture: ComponentFixture<BateriaAlimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriaAlimentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateriaAlimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
