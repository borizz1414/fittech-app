import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalentamientoInfoPage } from './calentamiento-info.page';

describe('CalentamientoInfoPage', () => {
  let component: CalentamientoInfoPage;
  let fixture: ComponentFixture<CalentamientoInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalentamientoInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalentamientoInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
