import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdadComponent } from './edad.component';

describe('EdadComponent', () => {
  let component: EdadComponent;
  let fixture: ComponentFixture<EdadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdadComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
