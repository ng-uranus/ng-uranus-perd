import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUranusPerdComponent } from './ng-uranus-perd.component';

describe('NgUranusPerdLibComponent', () => {
  let component: NgUranusPerdComponent;
  let fixture: ComponentFixture<NgUranusPerdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgUranusPerdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgUranusPerdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
