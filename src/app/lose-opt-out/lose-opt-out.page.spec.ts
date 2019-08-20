import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoseOptOutPage } from './lose-opt-out.page';

describe('LoseOptOutPage', () => {
  let component: LoseOptOutPage;
  let fixture: ComponentFixture<LoseOptOutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoseOptOutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoseOptOutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
