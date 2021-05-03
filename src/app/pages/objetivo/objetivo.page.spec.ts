import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjetivoPage } from './objetivo.page';

describe('ObjetivoPage', () => {
  let component: ObjetivoPage;
  let fixture: ComponentFixture<ObjetivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjetivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
