import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasoinicialPage } from './pasoinicial.page';

describe('PasoinicialPage', () => {
  let component: PasoinicialPage;
  let fixture: ComponentFixture<PasoinicialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasoinicialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasoinicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
