import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndicadoresComponent } from './indicadores.component';

describe('IndicadoresComponent', () => {
  let component: IndicadoresComponent;
  let fixture: ComponentFixture<IndicadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicadoresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
