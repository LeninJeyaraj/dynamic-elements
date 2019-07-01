import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicElementsComponent } from './dynamic-elements.component';

describe('DynamicElementsComponent', () => {
  let component: DynamicElementsComponent;
  let fixture: ComponentFixture<DynamicElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
