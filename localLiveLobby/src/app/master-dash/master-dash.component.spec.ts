import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDashComponent } from './master-dash.component';

describe('MasterDashComponent', () => {
  let component: MasterDashComponent;
  let fixture: ComponentFixture<MasterDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
