import {Component, OnInit} from '@angular/core';
import {CollaboratorService} from "../../../../services/collaborator.service";
import {Collaborator} from "../../../../models/collaborator";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-collaborator-about',
  standalone: true,
  imports: [],
  templateUrl: './collaborator-about.component.html',
  styleUrl: './collaborator-about.component.css'
})
export class CollaboratorAboutComponent implements OnInit  {
  collaborator!: Collaborator;
  constructor(private collaboratorService:CollaboratorService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.collaboratorService.getCollaboratorById(this.route.snapshot.params['id']).subscribe(
      {
        next: res => {
          this.collaborator = res
          console.log(this.collaborator)
        },
        error: err => {
          console.log("HTTP error.",err)
        },
      }
    );
  }

}
