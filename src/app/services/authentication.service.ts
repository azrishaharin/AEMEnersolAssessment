import {Headers, Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  constructor(private http: HttpClient){}

  login(username: string, password: string) {
    return this.http.post<any>(`http://test-demo.aem-enersol.com/api/account/login`, { username, password })
      .pipe(map(token => {
        // login successful if there's a jwt token in the response
        if (token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(token));
        }
        return token;
      }));

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
