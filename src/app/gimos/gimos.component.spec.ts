import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GimosComponent } from './gimos.component';

describe('GimosComponent', () => {
  let component: GimosComponent;
  let fixture: ComponentFixture<GimosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GimosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
