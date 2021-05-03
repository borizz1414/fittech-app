import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestFuerzaPasos1Page } from './test-fuerza-pasos1.page';

describe('TestFuerzaPasos1Page', () => {
  let component: TestFuerzaPasos1Page;
  let fixture: ComponentFixture<TestFuerzaPasos1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFuerzaPasos1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestFuerzaPasos1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
