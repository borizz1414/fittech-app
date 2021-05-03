import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialAlimentoPaso4Component } from './tutorial-alimento-paso4.component';

describe('TutorialAlimentoPaso4Component', () => {
  let component: TutorialAlimentoPaso4Component;
  let fixture: ComponentFixture<TutorialAlimentoPaso4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialAlimentoPaso4Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialAlimentoPaso4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
