import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MensajecorazonPage } from './mensajecorazon.page';

describe('MensajecorazonPage', () => {
  let component: MensajecorazonPage;
  let fixture: ComponentFixture<MensajecorazonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajecorazonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MensajecorazonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
