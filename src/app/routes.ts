import { Routes } from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  EventRouteActivatorService,
  EventListResolverService,
  CreateEventComponent,
  CreateSessionComponent,
} from './events/index';
import { ErrorComponent } from './errors/error.component';

export const appRoutes: Routes = [
  // CanDeactivate is a function in appModule - stops user leaving component
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  // Resolve - call service before resolving route, returns data and gets added to route as "events"
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolverService },
  },
  //   eventRouteActivator guard checks if ID exists, redirects to 404 page if not
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService],
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: ErrorComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },

  // When route starts with '/user', load user module (which in turn loads user routes) from specified path (lazy loading)
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
