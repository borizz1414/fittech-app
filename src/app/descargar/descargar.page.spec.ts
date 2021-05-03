import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescargarPage } from './descargar.page';

describe('DescargarPage', () => {
  let component: DescargarPage;
  let fixture: ComponentFixture<DescargarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescargarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescargarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
