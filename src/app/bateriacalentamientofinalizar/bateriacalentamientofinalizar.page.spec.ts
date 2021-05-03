import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateriacalentamientofinalizarPage } from './bateriacalentamientofinalizar.page';

describe('BateriacalentamientofinalizarPage', () => {
  let component: BateriacalentamientofinalizarPage;
  let fixture: ComponentFixture<BateriacalentamientofinalizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriacalentamientofinalizarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateriacalentamientofinalizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
