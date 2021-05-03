import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlimentosEditarPage } from './alimentos-editar.page';

describe('AlimentosEditarPage', () => {
  let component: AlimentosEditarPage;
  let fixture: ComponentFixture<AlimentosEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentosEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlimentosEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
