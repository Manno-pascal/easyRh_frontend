import {Component, Input, OnInit} from '@angular/core';
import {WorkerCard} from "../../../models/worker_card";

@Component({
  selector: 'app-worker-card',
  standalone: true,
  imports: [],
  templateUrl: './worker-card.component.html',
  styleUrl: './worker-card.component.css'
})
export class WorkerCardComponent implements OnInit{
  @Input() workerCard!: WorkerCard;

  ngOnInit() {
  }
  onAddWarning(): void{

    this.workerCard.warned ? this.workerCard.removeWarning():this.workerCard.addWarning();
  }
}
