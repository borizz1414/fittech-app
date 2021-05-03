import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlimentosNoLikePage } from './alimentos-no-like.page';

describe('AlimentosNoLikePage', () => {
  let component: AlimentosNoLikePage;
  let fixture: ComponentFixture<AlimentosNoLikePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentosNoLikePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlimentosNoLikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
