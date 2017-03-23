import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugareApartamentComponent } from './adaugare-apartament.component';

describe('AdaugareApartamentComponent', () => {
  let component: AdaugareApartamentComponent;
  let fixture: ComponentFixture<AdaugareApartamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaugareApartamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugareApartamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
