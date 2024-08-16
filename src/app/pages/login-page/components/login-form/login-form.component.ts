import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "../../../../services/login.service";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
  email: String | undefined;
  password: String | undefined;
  error: String | undefined;

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
  }

  onContinue(): void {
    this.router.navigateByUrl("home")
  }

  onSubmitForm(form: NgForm): void {
    this.loginService.setUserToken(form.value.email, form.value.password).subscribe(
      {
        next: res => {
          localStorage.setItem('bearer', res.bearer)
          this.onContinue()
        },
        error: err => {
          this.error = err.error
        },
        complete: () => {
          console.log("HTTP request completed.")
        }
      }
    );
  }
}
