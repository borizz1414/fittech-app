import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestFuerzaMenu3Page } from './test-fuerza-menu3.page';

describe('TestFuerzaMenu3Page', () => {
  let component: TestFuerzaMenu3Page;
  let fixture: ComponentFixture<TestFuerzaMenu3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFuerzaMenu3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestFuerzaMenu3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
