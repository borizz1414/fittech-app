import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopmensajeComponent } from './popmensaje.component';

describe('PopmensajeComponent', () => {
  let component: PopmensajeComponent;
  let fixture: ComponentFixture<PopmensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopmensajeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopmensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
