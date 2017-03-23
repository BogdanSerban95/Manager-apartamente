import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamenteComponent } from './apartamente.component';

describe('ApartamenteComponent', () => {
  let component: ApartamenteComponent;
  let fixture: ComponentFixture<ApartamenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartamenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartamenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
