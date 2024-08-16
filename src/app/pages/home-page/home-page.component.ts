import { Component } from '@angular/core';
import {
  CollaboratorsCardsListComponent,
} from "./components/collaborator-cards-list/collaborators-cards-list.component";
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CollaboratorsCardsListComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
