import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestFuerzaPasos3Page } from './test-fuerza-pasos3.page';

describe('TestFuerzaPasos3Page', () => {
  let component: TestFuerzaPasos3Page;
  let fixture: ComponentFixture<TestFuerzaPasos3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFuerzaPasos3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestFuerzaPasos3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
