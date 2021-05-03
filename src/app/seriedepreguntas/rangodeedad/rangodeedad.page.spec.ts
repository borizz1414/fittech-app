import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RangodeedadPage } from './rangodeedad.page';

describe('RangodeedadPage', () => {
  let component: RangodeedadPage;
  let fixture: ComponentFixture<RangodeedadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangodeedadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RangodeedadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
