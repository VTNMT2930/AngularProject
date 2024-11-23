import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail1ProductComponent } from './detail1-product.component';

describe('Detail1ProductComponent', () => {
  let component: Detail1ProductComponent;
  let fixture: ComponentFixture<Detail1ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detail1ProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detail1ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
