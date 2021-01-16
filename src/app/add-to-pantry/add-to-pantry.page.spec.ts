import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddToPantryPage } from './add-to-pantry.page';

describe('AddToPantryPage', () => {
  let component: AddToPantryPage;
  let fixture: ComponentFixture<AddToPantryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToPantryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddToPantryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
