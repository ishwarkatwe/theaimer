import { Routes } from '@angular/router';
import { LandingComponent } from './client/landing/landing.component';
import { ErrorComponent } from './error/error.component';
import { ClientComponent } from './client/client.component';
import { CourcesComponent } from './client/cources/cources.component';
import { AboutComponent } from './client/about/about.component';
import { ContactComponent } from './client/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'c/landing', pathMatch: 'full' },

  {
    path: 'c',
    component: ClientComponent,
    children: [
      {
        path: 'landing',
        component: LandingComponent,
      },
      {
        path: 'cources',
        component: CourcesComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
