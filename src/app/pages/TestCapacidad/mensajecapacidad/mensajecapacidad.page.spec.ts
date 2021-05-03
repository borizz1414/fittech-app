import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MensajecapacidadPage } from './mensajecapacidad.page';

describe('MensajecapacidadPage', () => {
  let component: MensajecapacidadPage;
  let fixture: ComponentFixture<MensajecapacidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajecapacidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MensajecapacidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
