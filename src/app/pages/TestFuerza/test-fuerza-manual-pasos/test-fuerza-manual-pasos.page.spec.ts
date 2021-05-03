import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestFuerzaManualPasosPage } from './test-fuerza-manual-pasos.page';

describe('TestFuerzaManualPasosPage', () => {
  let component: TestFuerzaManualPasosPage;
  let fixture: ComponentFixture<TestFuerzaManualPasosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFuerzaManualPasosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestFuerzaManualPasosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
