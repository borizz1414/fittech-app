import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesoComponent } from './peso.component';

describe('PesoComponent', () => {
  let component: PesoComponent;
  let fixture: ComponentFixture<PesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
