import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestFuerzaPasos4Page } from './test-fuerza-pasos4.page';

describe('TestFuerzaPasos4Page', () => {
  let component: TestFuerzaPasos4Page;
  let fixture: ComponentFixture<TestFuerzaPasos4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFuerzaPasos4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestFuerzaPasos4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
