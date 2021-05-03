import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalEmailPage } from './modal-email.page';

describe('ModalEmailPage', () => {
  let component: ModalEmailPage;
  let fixture: ComponentFixture<ModalEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEmailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
