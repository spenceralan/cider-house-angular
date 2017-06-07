import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKegComponent } from './add-keg.component';

describe('AddKegComponent', () => {
  let component: AddKegComponent;
  let fixture: ComponentFixture<AddKegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
