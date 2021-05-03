import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestCapacidadInfoPage } from './test-capacidad-info.page';

describe('TestCapacidadInfoPage', () => {
  let component: TestCapacidadInfoPage;
  let fixture: ComponentFixture<TestCapacidadInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCapacidadInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestCapacidadInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
