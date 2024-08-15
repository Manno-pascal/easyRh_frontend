import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Collaborator} from "../models/collaborator";

@Injectable({
  providedIn: 'root'
})
export class CollaboratorCardsService {
  constructor(private http: HttpClient) {
  }
  public getCollaboratorCards(): Observable<Collaborator[]> {
    return this.http.get<Collaborator[]>('http://localhost:8080/api/worker/company')
  }
}
