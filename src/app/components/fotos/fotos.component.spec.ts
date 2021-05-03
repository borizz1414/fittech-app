import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FotosComponent } from './fotos.component';

describe('FotosComponent', () => {
  let component: FotosComponent;
  let fixture: ComponentFixture<FotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
