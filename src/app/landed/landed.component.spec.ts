/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LandedComponent } from './landed.component';
import { Landed } from '../landed';

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
    component.landed = new Landed({ id: 1, fish: 'Catfish', weight: '123kg', sold: false });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
