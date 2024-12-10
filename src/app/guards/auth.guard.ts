import { inject } from '@angular/core';
import { CanDeactivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';
import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Usamos inject() para obtener el servicio
  const state$ = authService.getState().then(()=>{
    console.log('se entro');
  }).catch(()=>{console.log('fallo')});

  return true;
};

export const NoAuthGuard:  CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return true;
};
