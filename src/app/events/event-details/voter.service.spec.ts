import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { Observable, of } from 'rxjs';

describe('VoterService', () => {
  let voterService: VoterService;
  let mockHttp: any;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove voter from list of voters', () => {
      //   Define session and call method on voterService to delete Joe voter
      var session = { id: 6, voters: ['Joe', 'John'] };
      mockHttp.delete.and.returnValue(of(false));
      voterService.deleteVoter(3, <ISession>session, 'Joe');

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('John');
    });

    it('should call http.delete with correct url', () => {
      //   Define session and call method on voterService to delete Joe voter
      var session = { id: 6, voters: ['Joe', 'John'] };
      mockHttp.delete.and.returnValue(of(false));
      voterService.deleteVoter(3, <ISession>session, 'Joe');

      expect(mockHttp.delete).toHaveBeenCalledWith(
        `/api/events/3/sessions/6/voters/Joe`
      );
    });
  });

  describe('addVoter', () => {
    it('should call http.post with correct url', () => {
      //   Define session and call method on voterService to add Joe voter
      var session = { id: 6, voters: ['John'] };
      mockHttp.post.and.returnValue(of(false));
      voterService.addVoter(3, <ISession>session, 'Joe');

      expect(mockHttp.post).toHaveBeenCalledWith(
        `/api/events/3/sessions/6/voters/Joe`,
        {},
        jasmine.any(Object)
      );
    });
  });
});
