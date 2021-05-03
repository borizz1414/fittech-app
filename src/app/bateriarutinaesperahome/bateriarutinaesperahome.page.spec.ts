import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateriarutinaesperahomePage } from './bateriarutinaesperahome.page';

describe('BateriarutinaesperahomePage', () => {
  let component: BateriarutinaesperahomePage;
  let fixture: ComponentFixture<BateriarutinaesperahomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriarutinaesperahomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateriarutinaesperahomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
