import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Estatura2Component } from './estatura2.component';

describe('Estatura2Component', () => {
  let component: Estatura2Component;
  let fixture: ComponentFixture<Estatura2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Estatura2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Estatura2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
