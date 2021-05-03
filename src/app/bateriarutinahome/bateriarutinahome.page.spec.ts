import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateriarutinahomePage } from './bateriarutinahome.page';

describe('BateriarutinahomePage', () => {
  let component: BateriarutinahomePage;
  let fixture: ComponentFixture<BateriarutinahomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriarutinahomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateriarutinahomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
