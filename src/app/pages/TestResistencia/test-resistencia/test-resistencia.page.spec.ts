import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestResistenciaPage } from './test-resistencia.page';

describe('TestResistenciaPage', () => {
  let component: TestResistenciaPage;
  let fixture: ComponentFixture<TestResistenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestResistenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestResistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
