import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialPlanesPaso6Component } from './tutorial-planes-paso6.component';

describe('TutorialPlanesPaso6Component', () => {
  let component: TutorialPlanesPaso6Component;
  let fixture: ComponentFixture<TutorialPlanesPaso6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialPlanesPaso6Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialPlanesPaso6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
