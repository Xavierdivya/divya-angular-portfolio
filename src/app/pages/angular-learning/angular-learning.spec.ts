import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularLearning } from './angular-learning';

describe('AngularLearning', () => {
  let component: AngularLearning;
  let fixture: ComponentFixture<AngularLearning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularLearning],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularLearning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
