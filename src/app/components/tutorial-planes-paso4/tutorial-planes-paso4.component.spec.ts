import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialPlanesPaso4Component } from './tutorial-planes-paso4.component';

describe('TutorialPlanesPaso4Component', () => {
  let component: TutorialPlanesPaso4Component;
  let fixture: ComponentFixture<TutorialPlanesPaso4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialPlanesPaso4Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialPlanesPaso4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
