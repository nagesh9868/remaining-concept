import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponent } from './testing.component';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Test component name', () => {
    expect(component.componentName).toBe("testing");
  });

  it('the sum of the function is ', ()=>{
    expect(component.sum(40,60)).toBe(100)
  })

  it("if H1 containg user in HTML",()=>{
    let collection:any = fixture.nativeElement
    console.log(collection.querySelector('.testing'));
    
    expect(collection.querySelector('.testing').toContain('User'))
  })
});
