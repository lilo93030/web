import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quant } from './quant';

describe('Quant', () => {
  let component: Quant;
  let fixture: ComponentFixture<Quant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
