/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LandedComponent } from './landed.component';
import { Todo } from '../todo';

describe('LandedComponent', () => {
  let component: LandedComponent;
  let fixture: ComponentFixture<LandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandedComponent);
    component = fixture.componentInstance;
    component.todo = new Todo({ id: 1, title: 'Test', complete: false });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
