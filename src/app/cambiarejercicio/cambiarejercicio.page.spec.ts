import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambiarejercicioPage } from './cambiarejercicio.page';

describe('CambiarejercicioPage', () => {
  let component: CambiarejercicioPage;
  let fixture: ComponentFixture<CambiarejercicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarejercicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarejercicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
