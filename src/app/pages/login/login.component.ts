import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private s_login:LoginServiceService,
              private router:Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Usuario:', username, 'Contraseña:', password);

      this.s_login
        .onSubmit(username, password)
        .then((response) => {
          console.log('Respuesta del servidor:', response);

          if (response && response.message === 'Login exitoso') {
            console.log('Login correcto');

            setTimeout(() => {
              this.router.navigateByUrl('dashboard');
            }, 2000);

          } else {
            console.log('Credenciales incorrectas');
          }
        })
        .catch((error) => {
          console.error('Hubo un error en la solicitud');
        });
    }
  }

}
