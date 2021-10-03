import { Component, OnInit } from '@angular/core';
import { ISession } from '../../events/shared/event.model';
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

  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {}

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions: []) => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}
