import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndicadorescomparacionComponent } from './indicadorescomparacion.component';

describe('IndicadorescomparacionComponent', () => {
  let component: IndicadorescomparacionComponent;
  let fixture: ComponentFixture<IndicadorescomparacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicadorescomparacionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndicadorescomparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
