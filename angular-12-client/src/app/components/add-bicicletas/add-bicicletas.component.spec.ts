import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBicicletasComponent } from './add-bicicletas.component';

describe('AddBicicletasComponent', () => {
  let component: AddBicicletasComponent;
  let fixture: ComponentFixture<AddBicicletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBicicletasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBicicletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
