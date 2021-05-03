import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorazonPage } from './corazon.page';

describe('CorazonPage', () => {
  let component: CorazonPage;
  let fixture: ComponentFixture<CorazonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorazonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorazonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
