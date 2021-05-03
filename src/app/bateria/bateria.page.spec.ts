import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateriaPage } from './bateria.page';

describe('BateriaPage', () => {
  let component: BateriaPage;
  let fixture: ComponentFixture<BateriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
