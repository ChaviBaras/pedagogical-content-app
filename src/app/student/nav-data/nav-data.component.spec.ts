import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDataComponent } from './nav-data.component';

describe('NavDataComponent', () => {
  let component: NavDataComponent;
  let fixture: ComponentFixture<NavDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
