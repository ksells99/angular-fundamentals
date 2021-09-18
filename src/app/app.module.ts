import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventRouteActivatorService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolverService,
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ErrorComponent } from './errors/error.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    EventListResolverService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  // Component passed in above, can then check isDirty property on the component
  if (component.isDirty) {
    return window.confirm(
      'WARNING! You have not saved this event, do you really want to cancel?'
    );
  } else {
    return true;
  }
}
