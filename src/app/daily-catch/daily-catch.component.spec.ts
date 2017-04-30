/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { DailyCatchComponent } from './daily-catch.component';
import { DailyCatch } from '../daily-catch';

describe('DailyCatchComponent', () => {
  let component: DailyCatchComponent;
  let fixture: ComponentFixture<DailyCatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyCatchComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyCatchComponent);
    component = fixture.componentInstance;
    component.dailyCatch = new DailyCatch({ id: 1, day: '2017-04-30', weather: 'Sunny', landed: [] });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
