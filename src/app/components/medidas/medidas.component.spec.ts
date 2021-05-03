import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedidasComponent } from './medidas.component';

describe('MedidasComponent', () => {
  let component: MedidasComponent;
  let fixture: ComponentFixture<MedidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
