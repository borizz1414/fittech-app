import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedidasPage } from './medidas.page';

describe('MedidasPage', () => {
  let component: MedidasPage;
  let fixture: ComponentFixture<MedidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
