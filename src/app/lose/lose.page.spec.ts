import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LosePage } from './lose.page';

describe('LosePage', () => {
  let component: LosePage;
  let fixture: ComponentFixture<LosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
