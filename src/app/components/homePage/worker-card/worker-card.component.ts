import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-worker-card',
  standalone: true,
  imports: [],
  templateUrl: './worker-card.component.html',
  styleUrl: './worker-card.component.css'
})
export class WorkerCardComponent implements OnInit{
  @Input() worker!: Worker;

  ngOnInit() {
    console.log(this.worker);
  }
}
