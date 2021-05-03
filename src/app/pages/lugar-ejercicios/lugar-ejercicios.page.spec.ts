import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LugarEjerciciosPage } from './lugar-ejercicios.page';

describe('LugarEjerciciosPage', () => {
  let component: LugarEjerciciosPage;
  let fixture: ComponentFixture<LugarEjerciciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarEjerciciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LugarEjerciciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
