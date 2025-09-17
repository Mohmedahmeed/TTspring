import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSiteradioTComponent } from './details-siteradio-t.component';

describe('DetailsSiteradioTComponent', () => {
  let component: DetailsSiteradioTComponent;
  let fixture: ComponentFixture<DetailsSiteradioTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsSiteradioTComponent]
    });
    fixture = TestBed.createComponent(DetailsSiteradioTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
