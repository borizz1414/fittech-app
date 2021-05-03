import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialAlimentoPaso1Component } from './tutorial-alimento-paso1.component';

describe('TutorialAlimentoPaso1Component', () => {
  let component: TutorialAlimentoPaso1Component;
  let fixture: ComponentFixture<TutorialAlimentoPaso1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialAlimentoPaso1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialAlimentoPaso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
