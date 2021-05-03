import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateriacalentamientoesperahomePage } from './bateriacalentamientoesperahome.page';

describe('BateriacalentamientoesperahomePage', () => {
  let component: BateriacalentamientoesperahomePage;
  let fixture: ComponentFixture<BateriacalentamientoesperahomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriacalentamientoesperahomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateriacalentamientoesperahomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
