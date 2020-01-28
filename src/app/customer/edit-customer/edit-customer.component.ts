import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Customer} from "../../model/customer";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer: Customer;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let customerId = window.localStorage.getItem("editCustomerId");
    if(!customerId) {
      alert("Invalid action.")
      this.router.navigate(['list-customer']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id:[''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.apiService.getCustomerById(customerId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.apiService.updateCustomer(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('Customer updated successfully.');
            this.router.navigate(['list-customer']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
