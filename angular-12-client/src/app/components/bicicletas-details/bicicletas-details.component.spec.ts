import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicicletasDetailsComponent } from './bicicletas-details.component';

describe('BicicletasDetailsComponent', () => {
  let component: BicicletasDetailsComponent;
  let fixture: ComponentFixture<BicicletasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BicicletasDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BicicletasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
