import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutinaPage } from './rutina.page';

describe('RutinaPage', () => {
  let component: RutinaPage;
  let fixture: ComponentFixture<RutinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
