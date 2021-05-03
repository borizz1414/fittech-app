import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExperienciaPage } from './experiencia.page';

describe('ExperienciaPage', () => {
  let component: ExperienciaPage;
  let fixture: ComponentFixture<ExperienciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
