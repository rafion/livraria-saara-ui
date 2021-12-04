import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService, private snackbar: SnackbarService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }


  login() {
    console.log('login');
    this.auth.login(this.username?.value, this.password?.value)
      .pipe(filter(authenticated => authenticated))
      .subscribe({
        next: () => { this.router.navigateByUrl('/cart') },
        error: (error) => { this.snackbar.showMessage('Credenciais invalidas, entre com usuario e senha corretos', true, 10); }
      }


      )
  }
}
