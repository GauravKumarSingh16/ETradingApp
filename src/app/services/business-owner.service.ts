import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Businessowner } from '../models/businessowner';

@Injectable({
  providedIn: 'root'
})
export class BusinessOwnerService {

  apiUrl =`${environment.baseApiUrl}/businessOwners`;

  constructor(private client:HttpClient) { }
  add(businessowner:any):Observable<BusinessOwner>
  {
    return this.client.post<BusinessOwner>(this.apiUrl,businessowner);
  }
}
