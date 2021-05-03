import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalMedidasPage } from './modal-medidas.page';

describe('ModalMedidasPage', () => {
  let component: ModalMedidasPage;
  let fixture: ComponentFixture<ModalMedidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMedidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalMedidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
