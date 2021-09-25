import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ISession } from '..';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
})
export class SessionListComponent implements OnInit, OnChanges {
  // Sessions array & filterBy/sortBy property passed in from event-details component
  @Input() sessions?: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  // Separate sessions array used to display the filtered data
  visibleSessions: ISession[] = [];

  constructor() {}

  ngOnInit(): void {}

  // Runs every time inputs get new value
  ngOnChanges() {
    // Only filter/sort if sessions exist
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      // Call custom sort functions depending on sortBy string (name or votes)
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      // Create copy of full sessions array
      this.visibleSessions = this.sessions!.slice(0);
    } else {
      this.visibleSessions = this.sessions!.filter((session) => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }
}

const sortByNameAsc = (s1: ISession, s2: ISession) => {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
};

const sortByVotesDesc = (s1: ISession, s2: ISession) => {
  return s2.voters.length - s1.voters.length;
};
