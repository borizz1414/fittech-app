import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PorcentajegrasaPage } from './porcentajegrasa.page';

describe('PorcentajegrasaPage', () => {
  let component: PorcentajegrasaPage;
  let fixture: ComponentFixture<PorcentajegrasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcentajegrasaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PorcentajegrasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
