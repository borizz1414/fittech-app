import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialPlanesPaso1Component } from './tutorial-planes-paso1.component';

describe('TutorialPlanesPaso1Component', () => {
  let component: TutorialPlanesPaso1Component;
  let fixture: ComponentFixture<TutorialPlanesPaso1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialPlanesPaso1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialPlanesPaso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
