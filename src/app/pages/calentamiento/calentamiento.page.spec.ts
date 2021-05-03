import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalentamientoPage } from './calentamiento.page';

describe('CalentamientoPage', () => {
  let component: CalentamientoPage;
  let fixture: ComponentFixture<CalentamientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalentamientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalentamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
