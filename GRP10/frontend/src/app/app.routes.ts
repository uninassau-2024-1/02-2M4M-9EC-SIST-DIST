import { Routes } from '@angular/router';
import { ViacepComponent } from './components/viacep/viacep.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: ViacepComponent,
  },
  {
    path: 'Registrar',
    component: LoginComponent
  },
  {
    path: 'login',
    component: RegisterComponent
  }
];
