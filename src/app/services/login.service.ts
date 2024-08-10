import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // loginToken$: Observable<string>;
  constructor(private http: HttpClient) {}
    getUserToken(email: string, password:string): Observable<object> {
    const body = {"username":email, "password":password};
    return this.http.post('http://localhost:8080/api/login',body)
    }

}
