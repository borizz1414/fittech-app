import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaejercicioremplazarPage } from './listaejercicioremplazar.page';

describe('ListaejercicioremplazarPage', () => {
  let component: ListaejercicioremplazarPage;
  let fixture: ComponentFixture<ListaejercicioremplazarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaejercicioremplazarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaejercicioremplazarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
