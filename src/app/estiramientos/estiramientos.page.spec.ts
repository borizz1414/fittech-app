import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstiramientosPage } from './estiramientos.page';

describe('EstiramientosPage', () => {
  let component: EstiramientosPage;
  let fixture: ComponentFixture<EstiramientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstiramientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstiramientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
