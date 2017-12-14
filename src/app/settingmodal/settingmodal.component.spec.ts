import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingmodalComponent } from './settingmodal.component';

describe('SettingmodalComponent', () => {
  let component: SettingmodalComponent;
  let fixture: ComponentFixture<SettingmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
