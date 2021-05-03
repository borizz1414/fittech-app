import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalentamientodosPage } from './calentamientodos.page';

describe('CalentamientodosPage', () => {
  let component: CalentamientodosPage;
  let fixture: ComponentFixture<CalentamientodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalentamientodosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalentamientodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
