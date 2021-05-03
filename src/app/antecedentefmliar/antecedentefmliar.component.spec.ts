import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AntecedentefmliarComponent } from './antecedentefmliar.component';

describe('AntecedentefmliarComponent', () => {
  let component: AntecedentefmliarComponent;
  let fixture: ComponentFixture<AntecedentefmliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecedentefmliarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AntecedentefmliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
