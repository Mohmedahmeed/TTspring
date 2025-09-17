import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDerangementComponent } from './modifier-derangement.component';

describe('ModifierDerangementComponent', () => {
  let component: ModifierDerangementComponent;
  let fixture: ComponentFixture<ModifierDerangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierDerangementComponent]
    });
    fixture = TestBed.createComponent(ModifierDerangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
