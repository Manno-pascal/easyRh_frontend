import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorkerCardsService {
  constructor(private http: HttpClient) {
  }
  public getWorkerCards(): Observable<Array<Worker>> {
    return this.http.get<Array<Worker>>('http://localhost:8080/api/worker/company')
  }
}
