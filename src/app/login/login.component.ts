import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { ILogin } from './login.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(
    private fb: FormBuilder
    , private authService: AuthService
    , private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(loginForm) {
    console.log(loginForm);

    if (this.loginForm.invalid)
      return;

    let loginData: ILogin = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    this.authService.login(loginData);
    this.router.navigate(['/dashboard']);
  }
}
