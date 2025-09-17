import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSiteradioComponent } from './details-siteradio.component';

describe('DetailsSiteradioComponent', () => {
  let component: DetailsSiteradioComponent;
  let fixture: ComponentFixture<DetailsSiteradioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsSiteradioComponent]
    });
    fixture = TestBed.createComponent(DetailsSiteradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
