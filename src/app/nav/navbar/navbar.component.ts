import { Component, OnInit } from '@angular/core';
import { ISession, IEvent } from '../../events/shared/event.model';
import { AuthService } from 'src/app/user/auth.service';
import { EventService } from '../../events/shared/event.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: ISession[];
  eventList: IEvent[];

  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events: IEvent[]) => {
      this.eventList = events;
    });
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
    });
  }
}
