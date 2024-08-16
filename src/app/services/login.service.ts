import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  setUserToken(email: string, password: string): Observable<{ bearer: string }> {

    const body = {"username": email, "password": password};

    return this.http.post<{ bearer: string }>('http://localhost:8080/api/login', body);
  }

}
