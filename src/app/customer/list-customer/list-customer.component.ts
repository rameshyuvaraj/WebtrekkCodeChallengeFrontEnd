import { Component, OnInit , Inject} from '@angular/core';
import { Customer } from './../../model/customer';
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[];

  constructor(private router: Router, private customerService: ApiService) { }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe( data => {
        this.customers = data.result;
      });
  }

  deleteCustomer(customer: Customer): void {
    this.customerService.deleteCustomer(customer.name)
      .subscribe( data => {
        this.customers = this.customers.filter(u => u !== customer);
      })
  };

  editCustomer(customer: Customer): void {
    window.localStorage.removeItem("editCustomerId");
    window.localStorage.setItem("editCustomerId", customer.id.toString());
    this.router.navigate(['edit-customer']);
  };

  addCustomer(): void {
    this.router.navigate(['add-Customer']);
  };

}
