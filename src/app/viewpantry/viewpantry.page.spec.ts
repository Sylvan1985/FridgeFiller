import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewpantryPage } from './viewpantry.page';

describe('ViewpantryPage', () => {
  let component: ViewpantryPage;
  let fixture: ComponentFixture<ViewpantryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpantryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewpantryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
