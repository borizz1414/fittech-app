import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstaturaComponent } from './estatura.component';

describe('EstaturaComponent', () => {
  let component: EstaturaComponent;
  let fixture: ComponentFixture<EstaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstaturaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
