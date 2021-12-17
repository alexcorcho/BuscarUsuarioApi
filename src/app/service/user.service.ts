import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = environment.apiURL + 'users/'
  

  constructor(private http: HttpClient) { }

  getUser(userID: string): Observable<User>{
    const url = this.apiURL + userID;
    return this.http.get<User>(url);
  }
  
}
