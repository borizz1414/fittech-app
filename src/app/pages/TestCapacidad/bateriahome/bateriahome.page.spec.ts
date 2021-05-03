import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateriahomePage } from './bateriahome.page';

describe('BateriahomePage', () => {
  let component: BateriahomePage;
  let fixture: ComponentFixture<BateriahomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriahomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateriahomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
