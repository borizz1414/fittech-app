import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestFuerzaPasos2Page } from './test-fuerza-pasos2.page';

describe('TestFuerzaPasos2Page', () => {
  let component: TestFuerzaPasos2Page;
  let fixture: ComponentFixture<TestFuerzaPasos2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFuerzaPasos2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestFuerzaPasos2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
