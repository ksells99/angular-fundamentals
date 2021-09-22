import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '..';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event?: IEvent;
  addMode: boolean = false;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get event from service - pass in ID from url (+ casts as a number)
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
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
    // Call updateEvent on service to save
    this.eventService.updateEvent(this.event!);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
