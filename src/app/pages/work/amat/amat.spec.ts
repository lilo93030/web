import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Amat } from './amat';

describe('Amat', () => {
  let component: Amat;
  let fixture: ComponentFixture<Amat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Amat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Amat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
