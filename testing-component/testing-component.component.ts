import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-testing-component',
  imports: [FormsModule],
  templateUrl: './testing-component.component.html',
  styleUrl: './testing-component.component.css'
})
export class TestingComponentComponent {
  num1 =  0;
  num2 =  0;
  result = 0;
  isEven: boolean = true;
  rollNoList: number [] = [11, 12, 13, 14, 15, 17, 28, 20];
  constructor(private service: CustomerService) {

  }
  onAdd() {
    this.result = Number(this.num1) + Number(this.num2);
  }
  getAddition() {
   this.result = this.getSumOfTwoNo(this.num1, this.num2);
}

getSumOfTwoNo(num1: number, num2:number) {
  return num1 + num2;
}

getAddintionFromService() {
  this.result = this.service.addTwoNumbers(this.num1, this.num2);
}

getEvenOdd() {
   this.isEven = this.checkNumEvenOdd(this.num1);
}

checkNumEvenOdd(num: number) {
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
}
