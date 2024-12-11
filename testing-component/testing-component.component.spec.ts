import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponentComponent } from './testing-component.component';
import { CustomerService } from '../services/customer.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
//  Describe function is nothing but same as your component
fdescribe('TestingComponentComponent', () => {
  let component: TestingComponentComponent; // This is the instance of testing component
  let fixture: ComponentFixture<TestingComponentComponent>;
  let custService : CustomerService; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingComponentComponent],
      providers: [CustomerService, HttpClient, HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(TestingComponentComponent);
    component = fixture.componentInstance;
    custService = TestBed.inject(CustomerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should get result onAdd', () => {
    // Now we have to initialize two variables
    component.num1 = 4;
    component.num2 = 6;
    // In every test case we need to execute the function.
    component.onAdd(); 
    // Now we need to check the Line "this.result = Number(this.num1) + Number(this.num2);"
    expect(component.result).toBe(10);
  });
  it("Should get the result of two numbers", () => {
    component.num1 = 5;
    component.num2 = 8;
    component.getAddition();
    const addResult = component.getSumOfTwoNo(component.num1, component.num2);
    expect(addResult).toBe(13);
  })

  it("Get some of two numbers", () => {
    const num1 = 6;
    const num2 = 9;
    component.getAddition();
    const addResult = component.getSumOfTwoNo(num1,num2);
    expect(addResult).toBe(15);

  });
  it("Should get the sum of two numbers", () => {
     const number1 = 7;
     const number2 = 5;
    const resultAdd =  component.getSumOfTwoNo(number1, number2);
 expect(resultAdd).toBe(12);
     
  });
  it("Should get sum from Service => getAddintionFromService", () => {
  component.num1 = 15;
  component.num2 = 3;
  // Created a Spyon for the service function 
  spyOn(custService, 'addTwoNumbers').and.callThrough();
  component.getAddintionFromService();
  expect(custService.addTwoNumbers(component.num1, component.num2)).toBe(18);
  expect(component.result).toBe(18);
  })
});
