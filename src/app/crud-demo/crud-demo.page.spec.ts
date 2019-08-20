import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDemoPage } from './crud-demo.page';

describe('CrudDemoPage', () => {
  let component: CrudDemoPage;
  let fixture: ComponentFixture<CrudDemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDemoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
