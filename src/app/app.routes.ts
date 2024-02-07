import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: '', component: HomeComponent },
];
