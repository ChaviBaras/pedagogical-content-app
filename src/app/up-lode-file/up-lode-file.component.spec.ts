import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpLodeFileComponent } from './up-lode-file.component';

describe('UpLodeFileComponent', () => {
  let component: UpLodeFileComponent;
  let fixture: ComponentFixture<UpLodeFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpLodeFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpLodeFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
