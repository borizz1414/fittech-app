import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateriaesperahomePage } from './bateriaesperahome.page';

describe('BateriaesperahomePage', () => {
  let component: BateriaesperahomePage;
  let fixture: ComponentFixture<BateriaesperahomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriaesperahomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateriaesperahomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
