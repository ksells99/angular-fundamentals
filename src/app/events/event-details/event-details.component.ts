import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '..';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event?: IEvent;
  addMode = false;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Whenever ID in url changes, get event details from service - pass in ID from url (+ casts as a number)
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;

      // this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
      //   this.event = event;
      //   this.addMode = false;
      // });
    });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    // Find highest session ID and add 1 to create new increment ID
    const nextId = Math.max.apply(
      null,
      this.event!.sessions.map((session) => session.id)
    );
    session.id = nextId + 1;
    // Add to sessions array
    this.event?.sessions.push(session);
    // Call saveEvent on service to update
    this.eventService.saveEvent(this.event!).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
