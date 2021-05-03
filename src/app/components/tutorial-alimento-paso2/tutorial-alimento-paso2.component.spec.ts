import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialAlimentoPaso2Component } from './tutorial-alimento-paso2.component';

describe('TutorialAlimentoPaso2Component', () => {
  let component: TutorialAlimentoPaso2Component;
  let fixture: ComponentFixture<TutorialAlimentoPaso2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialAlimentoPaso2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialAlimentoPaso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
