import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { CircuitsComponent } from './pages/circuits/circuits.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Medade Travel | Agence 100% Marocaine - Circuits, Sahara & Transport' },
  { path: 'destinations', component: DestinationsComponent, title: 'Destinations au Maroc | Medade Travel' },
  { path: 'circuits', component: CircuitsComponent, title: 'Circuits, Expéditions & Transport | Medade Travel' },
  { path: 'contact', component: ContactComponent, title: 'Devis & Contact Direct | Medade Travel' },
  { path: 'experiences', redirectTo: 'circuits' },
  { path: '**', redirectTo: '' }
];
