import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateriaEstiramientosPage } from './bateria-estiramientos.page';

describe('BateriaEstiramientosPage', () => {
  let component: BateriaEstiramientosPage;
  let fixture: ComponentFixture<BateriaEstiramientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriaEstiramientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateriaEstiramientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
