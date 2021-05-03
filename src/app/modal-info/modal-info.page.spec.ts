import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalInfoPage } from './modal-info.page';

describe('ModalInfoPage', () => {
  let component: ModalInfoPage;
  let fixture: ComponentFixture<ModalInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
