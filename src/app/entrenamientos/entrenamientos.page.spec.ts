import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntrenamientosPage } from './entrenamientos.page';

describe('EntrenamientosPage', () => {
  let component: EntrenamientosPage;
  let fixture: ComponentFixture<EntrenamientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrenamientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntrenamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
