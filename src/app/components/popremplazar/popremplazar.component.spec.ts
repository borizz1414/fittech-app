import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopremplazarComponent } from './popremplazar.component';

describe('PopremplazarComponent', () => {
  let component: PopremplazarComponent;
  let fixture: ComponentFixture<PopremplazarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopremplazarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopremplazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
