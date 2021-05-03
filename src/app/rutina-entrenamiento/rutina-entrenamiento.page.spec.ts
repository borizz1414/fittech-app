import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutinaEntrenamientoPage } from './rutina-entrenamiento.page';

describe('RutinaEntrenamientoPage', () => {
  let component: RutinaEntrenamientoPage;
  let fixture: ComponentFixture<RutinaEntrenamientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaEntrenamientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutinaEntrenamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
