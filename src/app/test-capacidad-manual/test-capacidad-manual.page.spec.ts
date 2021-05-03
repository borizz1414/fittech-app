import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestCapacidadManualPage } from './test-capacidad-manual.page';

describe('TestCapacidadManualPage', () => {
  let component: TestCapacidadManualPage;
  let fixture: ComponentFixture<TestCapacidadManualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCapacidadManualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestCapacidadManualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
