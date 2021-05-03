import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AntecedentefamiliarPage } from './antecedentefamiliar.page';

describe('AntecedentefamiliarPage', () => {
  let component: AntecedentefamiliarPage;
  let fixture: ComponentFixture<AntecedentefamiliarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecedentefamiliarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AntecedentefamiliarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
