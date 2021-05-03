import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormMedicoPage } from './form-medico.page';

describe('FormMedicoPage', () => {
  let component: FormMedicoPage;
  let fixture: ComponentFixture<FormMedicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMedicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormMedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
