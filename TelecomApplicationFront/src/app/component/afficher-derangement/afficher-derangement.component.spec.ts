import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherDerangementComponent } from './afficher-derangement.component';

describe('AfficherDerangementComponent', () => {
  let component: AfficherDerangementComponent;
  let fixture: ComponentFixture<AfficherDerangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherDerangementComponent]
    });
    fixture = TestBed.createComponent(AfficherDerangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
