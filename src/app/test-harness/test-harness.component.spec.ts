import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed'
import { HarnessPredicate } from '@angular/cdk/testing'
import { TestHarnessComponent } from './test-harness.component';

describe('TestHarnessComponent', () => {
  let component: TestHarnessComponent;
  let fixture: ComponentFixture<TestHarnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHarnessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHarnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
