import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackBtnComponent } from './back-btn.component';

describe('BackBtnComponent', () => {
  let component: BackBtnComponent;
  let fixture: ComponentFixture<BackBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackBtnComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
