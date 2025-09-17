import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSiteradioComponent } from './ajouter-siteradio.component';

describe('AjouterSiteradioComponent', () => {
  let component: AjouterSiteradioComponent;
  let fixture: ComponentFixture<AjouterSiteradioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterSiteradioComponent]
    });
    fixture = TestBed.createComponent(AjouterSiteradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
