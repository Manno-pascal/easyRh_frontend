import {Component, OnInit} from '@angular/core';
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
  workers!: Array<Worker>;
  ngOnInit(): void {
    this.workerCardsService.getWorkerCards().subscribe(
      {
        next: res => {
          console.log(res)
          this.workers = res
          console.log(this.workers)
          console.log(this.workers[0].lastname)
        },
        error: err => {
          console.log("HTTP error.",err)
        },
      }
    );
  }
}
