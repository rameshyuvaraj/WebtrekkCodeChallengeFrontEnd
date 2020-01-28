import { RouterModule, Routes } from '@angular/router';
import {AddCustomerComponent} from "./customer/add-customer/add-customer.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";

const routes: Routes = [
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'list-customer', component: ListCustomerComponent },
  { path: 'edit-customer', component: EditCustomerComponent },
  {path : '', component : ListCustomerComponent}
];

export const routing = RouterModule.forRoot(routes);