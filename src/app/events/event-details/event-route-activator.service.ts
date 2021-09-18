import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root',
})
export class EventRouteActivatorService implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): any {
    // Pass in event ID from url to service and see if exists (!! casts to boolean)
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists) {
      this.router.navigate(['/404']);
    } else {
      return eventExists;
    }
  }
}
