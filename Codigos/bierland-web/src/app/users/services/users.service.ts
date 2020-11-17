import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Login } from 'src/models/Login';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  uri = `${environment.baseUrl}/User`;
  constructor(private http: HttpClient) {}

  login(login: Login): Observable<string> {
    console.log(login);
    const myHeaders = new HttpHeaders();
    myHeaders.append('Accept', 'application/text');
    return this.http.post<string>(`${this.uri}/login`, login, { headers: myHeaders, responseType: 'text' as 'json' });
  }

  logout(): Observable<void> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('token', localStorage.token);
    return this.http.delete<void>(this.uri, { headers: myHeaders });
  }

  isLogued(): boolean {
    const token = localStorage.token;
    return token != null && token !== undefined && token !== '';
  }
}
