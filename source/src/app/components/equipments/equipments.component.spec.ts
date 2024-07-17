import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementsComponent } from './equipments.component';

describe('EquipementsComponent', () => {
  let component: EquipementsComponent;
  let fixture: ComponentFixture<EquipementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipementsComponent]
    });
    fixture = TestBed.createComponent(EquipementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
