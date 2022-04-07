import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenDataComponent } from './children-data.component';

describe('ChildrenDataComponent', () => {
  let component: ChildrenDataComponent;
  let fixture: ComponentFixture<ChildrenDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
