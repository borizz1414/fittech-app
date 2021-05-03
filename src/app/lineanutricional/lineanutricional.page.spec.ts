import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LineanutricionalPage } from './lineanutricional.page';

describe('LineanutricionalPage', () => {
  let component: LineanutricionalPage;
  let fixture: ComponentFixture<LineanutricionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineanutricionalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LineanutricionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
