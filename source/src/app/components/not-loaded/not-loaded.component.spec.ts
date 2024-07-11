import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLoadedComponent } from './not-loaded.component';

describe('NotLoadedComponent', () => {
  let component: NotLoadedComponent;
  let fixture: ComponentFixture<NotLoadedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotLoadedComponent]
    });
    fixture = TestBed.createComponent(NotLoadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
