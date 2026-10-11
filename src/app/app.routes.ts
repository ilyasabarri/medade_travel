import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { CircuitsComponent } from './pages/circuits/circuits.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Medade Travel | 3 Circuits Phares au Maroc & Transport Direct' },
  { path: 'circuits', redirectTo: '' },
  { path: 'destinations', redirectTo: '' },
  { path: 'contact', redirectTo: '' },
  { path: 'experiences', redirectTo: '' },
  { path: '**', redirectTo: '' }
];
