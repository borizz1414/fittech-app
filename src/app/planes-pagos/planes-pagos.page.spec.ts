import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanesPagosPage } from './planes-pagos.page';

describe('PlanesPagosPage', () => {
  let component: PlanesPagosPage;
  let fixture: ComponentFixture<PlanesPagosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanesPagosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanesPagosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
