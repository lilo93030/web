import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asml } from './asml';

describe('Asml', () => {
  let component: Asml;
  let fixture: ComponentFixture<Asml>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Asml]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asml);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
