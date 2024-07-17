import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementsDetailsComponent } from './equipments-details.component';

describe('EquipementsDetailsComponent', () => {
  let component: EquipementsDetailsComponent;
  let fixture: ComponentFixture<EquipementsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipementsDetailsComponent]
    });
    fixture = TestBed.createComponent(EquipementsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
