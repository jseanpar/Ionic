import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LugarPage } from './lugar.page';

describe('LugarPage', () => {
  let component: LugarPage;
  let fixture: ComponentFixture<LugarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LugarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
