import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateriacalentamientohomePage } from './bateriacalentamientohome.page';

describe('BateriacalentamientohomePage', () => {
  let component: BateriacalentamientohomePage;
  let fixture: ComponentFixture<BateriacalentamientohomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriacalentamientohomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateriacalentamientohomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
