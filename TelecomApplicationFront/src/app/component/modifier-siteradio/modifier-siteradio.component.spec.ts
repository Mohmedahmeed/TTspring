import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSiteradioComponent } from './modifier-siteradio.component';

describe('ModifierSiteradioComponent', () => {
  let component: ModifierSiteradioComponent;
  let fixture: ComponentFixture<ModifierSiteradioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierSiteradioComponent]
    });
    fixture = TestBed.createComponent(ModifierSiteradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
