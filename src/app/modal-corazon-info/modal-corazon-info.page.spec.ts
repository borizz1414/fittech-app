import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCorazonInfoPage } from './modal-corazon-info.page';

describe('ModalCorazonInfoPage', () => {
  let component: ModalCorazonInfoPage;
  let fixture: ComponentFixture<ModalCorazonInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCorazonInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCorazonInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
