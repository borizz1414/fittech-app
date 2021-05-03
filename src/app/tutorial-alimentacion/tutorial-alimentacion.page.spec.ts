import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialAlimentacionPage } from './tutorial-alimentacion.page';

describe('TutorialAlimentacionPage', () => {
  let component: TutorialAlimentacionPage;
  let fixture: ComponentFixture<TutorialAlimentacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialAlimentacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialAlimentacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
