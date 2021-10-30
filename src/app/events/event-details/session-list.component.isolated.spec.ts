import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.model';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService: any, mockVoterService: any;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('should filter sessions correctly', () => {
      //    Define array of sessions & filterBy, sortBy props
      component.sessions = <ISession[]>[
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 2', level: 'intermediate' },
        { name: 'session 3', level: 'beginner' },
      ];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      //   Based on array & filter above, should only leave sessions 1 & 2 in array
      expect(component.visibleSessions.length).toBe(2);
    });

    it('should sort sessions correctly', () => {
      //    Define array of sessions & filterBy, sortBy props
      component.sessions = <ISession[]>[
        { name: 'gggbdd', level: 'intermediate' },
        { name: 'aaabg', level: 'intermediate' },
        { name: 'zzzzz', level: 'beginner' },
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      //   Based on array & sort above, 'aaabg' should be first in array
      expect(component.visibleSessions[0].name).toBe('aaabg');
    });
  });
});
