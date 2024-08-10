import { Component } from '@angular/core';
import {WorkerCardsListComponent} from "../../components/homePage/worker-cards-list/workers-cards-list.component";
import {HeaderComponent} from "../../components/shared/header/header.component";
import {FooterComponent} from "../../components/shared/footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    WorkerCardsListComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
