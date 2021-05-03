import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlimentosSeleccionPage } from './alimentos-seleccion.page';

describe('AlimentosSeleccionPage', () => {
  let component: AlimentosSeleccionPage;
  let fixture: ComponentFixture<AlimentosSeleccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentosSeleccionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlimentosSeleccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
