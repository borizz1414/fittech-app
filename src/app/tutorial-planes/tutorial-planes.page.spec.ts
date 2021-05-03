import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialPlanesPage } from './tutorial-planes.page';

describe('TutorialPlanesPage', () => {
  let component: TutorialPlanesPage;
  let fixture: ComponentFixture<TutorialPlanesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialPlanesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialPlanesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
