import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoseFinalStagePage } from './lose-final-stage.page';

describe('LoseFinalStagePage', () => {
  let component: LoseFinalStagePage;
  let fixture: ComponentFixture<LoseFinalStagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoseFinalStagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoseFinalStagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
