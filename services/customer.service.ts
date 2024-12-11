import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUri: string = 'https://freeapi.miniprojectideas.com/api/Annadata/GetAllCustomerUsers';


  constructor(private http: HttpClient) {

   }
   loadCustomers() {
    debugger;
    return this.http.get(this.apiUri + "Get Customers");
   }
   createNewCustomers(obj:any) {
    debugger;
    return this.http.post(this.apiUri + "create New Customers", obj);

   }

   addTwoNumbers(num1: number, num2: number) {
    return num1 + num2;

   }
}
