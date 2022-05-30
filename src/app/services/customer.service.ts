import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, observable } from 'rxjs';
import{Customer} from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl =`${environment.baseApiUrl}/customers`;

 constructor(private client:HttpClient) {}
 add(customer:any):Observable<Customer>
  {
    return this.client.post<Customer>(this.apiUrl,customer);
  }
}
