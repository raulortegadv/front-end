import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicicletasListComponent } from './bicicletas-list.component';

describe('BicicletasListComponent', () => {
  let component: BicicletasListComponent;
  let fixture: ComponentFixture<BicicletasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BicicletasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BicicletasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
