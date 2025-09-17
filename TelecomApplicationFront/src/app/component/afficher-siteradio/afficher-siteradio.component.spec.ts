import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherSiteradioComponent } from './afficher-siteradio.component';

describe('AfficherSiteradioComponent', () => {
  let component: AfficherSiteradioComponent;
  let fixture: ComponentFixture<AfficherSiteradioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherSiteradioComponent]
    });
    fixture = TestBed.createComponent(AfficherSiteradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
