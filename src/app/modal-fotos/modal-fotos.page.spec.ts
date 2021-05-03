import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFotosPage } from './modal-fotos.page';

describe('ModalFotosPage', () => {
  let component: ModalFotosPage;
  let fixture: ComponentFixture<ModalFotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
