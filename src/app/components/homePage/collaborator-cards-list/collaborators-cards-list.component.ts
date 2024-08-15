import {Component, OnInit} from '@angular/core';
import {CollaboratorCardComponent} from "../collaborator-card/collaborator-card.component";
import {CollaboratorCardsService} from '../../../services/collaborator-cards.service'
import {Collaborator} from "../../../models/collaborator";

@Component({
  selector: 'app-collaborators-cards-list',
  standalone: true,
  imports: [
    CollaboratorCardComponent,
  ],
  templateUrl: './collaborators-cards-list.component.html',
  styleUrl: './collaborators-cards-list.component.css'
})
export class CollaboratorsCardsListComponent implements OnInit {
  constructor(private collaboratorCardsService:CollaboratorCardsService) {
  }
  collaborators!: Array<Collaborator>;
  ngOnInit(): void {
    this.collaboratorCardsService.getCollaboratorCards().subscribe(
      {
        next: res => {
          this.collaborators = res
        },
        error: err => {
          console.log("HTTP error.",err)
        },
      }
    );
  }
}
