import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgresoComponent } from './progreso.component';

describe('ProgresoComponent', () => {
  let component: ProgresoComponent;
  let fixture: ComponentFixture<ProgresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgresoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
