import { Routes } from '@angular/router';
import {Tareas} from './tareas/tareas';
import { Password } from './password/password';

export const routes: Routes = [
  {
    path: 'tareas',
    component: Tareas
  },
  {
    path: 'password',
    component: Password
  },
  {
    path: '',
    redirectTo: 'tareas',
    pathMatch: 'full'
  }

];
