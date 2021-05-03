import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestFuerzaMenuPage } from './test-fuerza-menu.page';

describe('TestFuerzaMenuPage', () => {
  let component: TestFuerzaMenuPage;
  let fixture: ComponentFixture<TestFuerzaMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFuerzaMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestFuerzaMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
