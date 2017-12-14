import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreresultComponent } from './moreresult.component';

describe('MoreresultComponent', () => {
  let component: MoreresultComponent;
  let fixture: ComponentFixture<MoreresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
