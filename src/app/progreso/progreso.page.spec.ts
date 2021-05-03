import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgresoPage } from './progreso.page';

describe('ProgresoPage', () => {
  let component: ProgresoPage;
  let fixture: ComponentFixture<ProgresoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgresoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgresoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
