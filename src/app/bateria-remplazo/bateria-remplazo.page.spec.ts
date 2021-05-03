import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateriaRemplazoPage } from './bateria-remplazo.page';

describe('BateriaRemplazoPage', () => {
  let component: BateriaRemplazoPage;
  let fixture: ComponentFixture<BateriaRemplazoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriaRemplazoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateriaRemplazoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
