import {Component, OnInit} from '@angular/core';
import {
  CollaboratorsCardsListComponent
} from "../../components/homePage/collaborator-cards-list/collaborators-cards-list.component";
import {FooterComponent} from "../../components/shared/footer/footer.component";
import {HeaderComponent} from "../../components/shared/header/header.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    CollaboratorsCardsListComponent,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
  }

}
