import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private snackbar: SnackbarService) {

  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      confirmPassword: ['', [this.confirmValidator]],
    });
  }

  get name() {
    return this.registerForm.get('name');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get email() {
    return this.registerForm.get('email');
  }

  register() {
    this.auth.register(this.name?.value, this.username?.value, this.password?.value, this.email?.value).
      subscribe({
        next: (usuario) => { console.log(usuario), this.snackbar.showMessage('usuario registrado com sucesso! Efetue o login') },
        error: (error) => { console.log(error), this.snackbar.showMessage(error.error, true) }
      })
  }

  confirmValidator = (control: FormControl): { [k: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.registerForm.controls.password.value) {
      return { error: true, confirm: true };
    }
    return {};
  };



}
