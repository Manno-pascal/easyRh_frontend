import {Component, OnInit} from '@angular/core';
import {WorkerCard} from "../../../models/worker_card";
import {WorkerCardComponent} from "../worker-card/worker-card.component";
import {WorkerCardsService} from '../../../services/worker-cards.service'

@Component({
  selector: 'app-worker-cards-list',
  standalone: true,
  imports: [
    WorkerCardComponent,
  ],
  templateUrl: './workers-cards-list.component.html',
  styleUrl: './workers-cards-list.component.css'
})
export class WorkerCardsListComponent implements OnInit {
  constructor(private workerCardsService:WorkerCardsService) {
  }
  workers!: WorkerCard[];
  ngOnInit(): void {
    this.workers = this.workerCardsService.getWorkerCards();
    this.workers[1].setUnevaleuraleatoire("yolo")
  }
}
