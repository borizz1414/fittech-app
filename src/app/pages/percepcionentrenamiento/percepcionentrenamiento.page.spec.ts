import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PercepcionentrenamientoPage } from './percepcionentrenamiento.page';

describe('PercepcionentrenamientoPage', () => {
  let component: PercepcionentrenamientoPage;
  let fixture: ComponentFixture<PercepcionentrenamientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercepcionentrenamientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PercepcionentrenamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
