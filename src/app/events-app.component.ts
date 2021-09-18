import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
