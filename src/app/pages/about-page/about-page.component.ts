import {Component, OnInit} from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {ActivatedRoute} from "@angular/router";
import {CollaboratorAboutComponent} from "./components/collaborator-about/collaborator-about.component";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    CollaboratorAboutComponent
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
