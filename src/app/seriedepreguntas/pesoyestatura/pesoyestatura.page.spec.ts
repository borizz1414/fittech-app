import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesoyestaturaPage } from './pesoyestatura.page';

describe('PesoyestaturaPage', () => {
  let component: PesoyestaturaPage;
  let fixture: ComponentFixture<PesoyestaturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesoyestaturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesoyestaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
