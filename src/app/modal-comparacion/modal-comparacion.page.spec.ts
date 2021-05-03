import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalComparacionPage } from './modal-comparacion.page';

describe('ModalComparacionPage', () => {
  let component: ModalComparacionPage;
  let fixture: ComponentFixture<ModalComparacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComparacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComparacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
