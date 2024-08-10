import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit{
  email: String | undefined;
  password: String | undefined;
  userToken$: Observable<object> | undefined;
  constructor(private router: Router, private loginService: LoginService) { }
  ngOnInit() {  }

  onContinue(): void {
    this.router.navigateByUrl("home")
  }

  onSubmitForm(form: NgForm): void {
    console.log(form)
    this.userToken$ = this.loginService.getUserToken(form.value.email, form.value.password);
    this.userToken$.subscribe(
      (token: any) => {
        console.log(token);
      }

    )
  }
}
