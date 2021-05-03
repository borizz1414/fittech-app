import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateriarutinaPage } from './bateriarutina.page';

describe('BateriarutinaPage', () => {
  let component: BateriarutinaPage;
  let fixture: ComponentFixture<BateriarutinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriarutinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateriarutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
