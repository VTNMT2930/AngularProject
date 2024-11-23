import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail2ProductComponent } from './detail2-product.component';

describe('Detail2ProductComponent', () => {
  let component: Detail2ProductComponent;
  let fixture: ComponentFixture<Detail2ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detail2ProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detail2ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
