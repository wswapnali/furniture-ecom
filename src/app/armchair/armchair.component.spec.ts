import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmchairComponent } from './armchair.component';

describe('ArmchairComponent', () => {
  let component: ArmchairComponent;
  let fixture: ComponentFixture<ArmchairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmchairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmchairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
