import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail3ProductComponent } from './detail3-product.component';

describe('Detail3ProductComponent', () => {
  let component: Detail3ProductComponent;
  let fixture: ComponentFixture<Detail3ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detail3ProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detail3ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
