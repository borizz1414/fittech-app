import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndicadoresPage } from './indicadores.page';

describe('IndicadoresPage', () => {
  let component: IndicadoresPage;
  let fixture: ComponentFixture<IndicadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicadoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndicadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
