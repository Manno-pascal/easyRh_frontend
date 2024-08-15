import {Component, Input, OnInit} from '@angular/core';
import {Collaborator} from "../../../models/collaborator";
import {Router} from "@angular/router";
import {LoginService} from "../../../services/login.service";


@Component({
  selector: 'app-collaborator-card',
  standalone: true,
  imports: [],
  templateUrl: './collaborator-card.component.html',
  styleUrl: './collaborator-card.component.css'
})


export class CollaboratorCardComponent implements OnInit{
  @Input() collaborator!: Collaborator;
  constructor(private router: Router) {
  }
  ngOnInit() {

  }

  onAboutCard(){
    this.router.navigateByUrl(`about/${this.collaborator.id}`)
  }
  onDeleteCard(){
  console.log(this.collaborator.id)
  }
}
