import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialPlanesPaso3Component } from './tutorial-planes-paso3.component';

describe('TutorialPlanesPaso3Component', () => {
  let component: TutorialPlanesPaso3Component;
  let fixture: ComponentFixture<TutorialPlanesPaso3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialPlanesPaso3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialPlanesPaso3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
