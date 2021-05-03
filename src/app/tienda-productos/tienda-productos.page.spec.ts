import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiendaProductosPage } from './tienda-productos.page';

describe('TiendaProductosPage', () => {
  let component: TiendaProductosPage;
  let fixture: ComponentFixture<TiendaProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiendaProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
