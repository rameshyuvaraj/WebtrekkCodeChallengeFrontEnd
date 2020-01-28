import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from "../model/customer";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/api/customers/';

  getCustomers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getCustomerById(id: String): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createCustomer(customer: Customer): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, customer);
  }

  updateCustomer(customer: Customer): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + customer.id, customer);
  }

  deleteCustomer(id: String): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}