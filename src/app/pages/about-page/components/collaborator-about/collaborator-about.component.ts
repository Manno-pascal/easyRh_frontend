import { Component, OnInit } from '@angular/core';
import { CollaboratorService } from "../../../../services/collaborator.service";
import { Collaborator } from "../../../../models/collaborator";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-collaborator-about',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './collaborator-about.component.html',
  styleUrls: ['./collaborator-about.component.css']
})
export class CollaboratorAboutComponent implements OnInit {
  workerForm!: FormGroup;
  collaborator!: Collaborator;

  constructor(
    private collaboratorService: CollaboratorService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.collaboratorService.getCollaboratorById(this.route.snapshot.params['id']).subscribe({
      next: res => {
        this.collaborator = res;
        this.initializeForm();
      },
      error: err => {
        console.log("HTTP error.", err);
      },
    });
  }

  initializeForm(): void {
    this.workerForm = this.formBuilder.group({
      firstname: [this.collaborator.firstname],
      lastname: [this.collaborator.lastname],
      position: [this.collaborator.position],
      positionType: [this.collaborator.positionType],
      gender: [this.collaborator.gender],
      age: [this.collaborator.age],
      warning: [this.collaborator.warning],
      comment: [this.collaborator.comment],
      isRqth: [this.collaborator.rqth],
      dayOff: [this.collaborator.dayOff],
      phoneNumber: [this.collaborator.phoneNumber],
      email: [this.collaborator.email],
      isCeo: [this.collaborator.ceo],
      isRh: [this.collaborator.rh],
      country: [this.collaborator.country],
      address: [this.collaborator.address],
      zip: [this.collaborator.zip],
      city: [this.collaborator.city],
    });
  }

  onSubmit(): void {
    this.collaborator = this.workerForm.value;
    console.log(this.collaborator);
  }
}
