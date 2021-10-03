import { Injectable } from '@angular/core';
import { ISession } from '../shared/event.model';

@Injectable({
  providedIn: 'root',
})
export class VoterService {
  constructor() {}

  deleteVoter(session: ISession, voterName: string) {
    // If session's voters already includes this user, filter out of array
    session.voters = session.voters.filter((voter) => voter !== voterName);
  }

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }

  userHasVoted(session: ISession, voterName: string) {
    // Returns true if voterName is found in session's voters array
    return session.voters.some((voter) => voter === voterName);
  }
}
