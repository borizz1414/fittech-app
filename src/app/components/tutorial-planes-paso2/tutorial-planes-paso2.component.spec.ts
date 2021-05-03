import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialPlanesPaso2Component } from './tutorial-planes-paso2.component';

describe('TutorialPlanesPaso2Component', () => {
  let component: TutorialPlanesPaso2Component;
  let fixture: ComponentFixture<TutorialPlanesPaso2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialPlanesPaso2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialPlanesPaso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
