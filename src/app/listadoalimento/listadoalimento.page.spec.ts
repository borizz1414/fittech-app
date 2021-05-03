import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListadoalimentoPage } from './listadoalimento.page';

describe('ListadoalimentoPage', () => {
  let component: ListadoalimentoPage;
  let fixture: ComponentFixture<ListadoalimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoalimentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoalimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
