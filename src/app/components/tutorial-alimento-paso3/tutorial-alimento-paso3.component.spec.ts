import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialAlimentoPaso3Component } from './tutorial-alimento-paso3.component';

describe('TutorialAlimentoPaso3Component', () => {
  let component: TutorialAlimentoPaso3Component;
  let fixture: ComponentFixture<TutorialAlimentoPaso3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialAlimentoPaso3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialAlimentoPaso3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
