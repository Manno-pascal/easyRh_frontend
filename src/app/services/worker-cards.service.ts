import {Injectable} from "@angular/core";
import {WorkerCard} from "../models/worker_card";

@Injectable({
  providedIn: 'root'
})
export class WorkerCardsService {
  private workerCards: WorkerCard[] = [
    new WorkerCard('John', "doe", "Developpeur", "Salarié", "https://picsum.photos/300/300", 0, false),
    new WorkerCard('Brian', "Johson", "Chanteur", "Musicien", "https://picsum.photos/300/300", 0, false),
    new WorkerCard('Angus', "Young", "Guitariste", "Légende", "https://picsum.photos/300/300", 0, false),

  ];
  public getWorkerCards(): WorkerCard[] {
    return [...this.workerCards];
  }
}
