import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelacioncaderaPage } from './relacioncadera.page';

describe('RelacioncaderaPage', () => {
  let component: RelacioncaderaPage;
  let fixture: ComponentFixture<RelacioncaderaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelacioncaderaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelacioncaderaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
