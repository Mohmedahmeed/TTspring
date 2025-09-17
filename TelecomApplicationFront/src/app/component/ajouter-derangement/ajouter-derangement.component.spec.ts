import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDerangementComponent } from './ajouter-derangement.component';

describe('AjouterDerangementComponent', () => {
  let component: AjouterDerangementComponent;
  let fixture: ComponentFixture<AjouterDerangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterDerangementComponent]
    });
    fixture = TestBed.createComponent(AjouterDerangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
