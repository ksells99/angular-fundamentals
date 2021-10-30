import {
  Component,
  DebugElement,
  Input,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CollapsibleWellComponent } from 'src/app/common';
import { AuthService } from 'src/app/user/auth.service';
import { UpvoteComponent } from '.';
import { DurationPipe } from '..';
import { SessionListComponent } from './session-list.component';
import { VoterService } from './voter.service';

describe('SessionListComponent', () => {
  let mockAuthService: any, mockVoterService: any;
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement, debugEl: DebugElement;

  beforeEach(() => {
    mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { userName: 'Joe' },
    };
    mockVoterService = { userHasVoted: () => true };

    TestBed.configureTestingModule({
      declarations: [SessionListComponent, DurationPipe],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService },
      ],
      // Prevents errors in console for deeper components not used by test
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have correct name', () => {
      //   Define component properties & call ngOnChanges
      component.sessions = [
        {
          name: 'Session 1',
          id: 3,
          presenter: 'Kai',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['John', 'Bobby'],
        },
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;
      component.ngOnChanges();

      //   Update template bindings
      fixture.detectChanges();

      // Ensure title div contains session name
      expect(element.querySelector('[well-title]')?.textContent).toContain(
        'Session 1'
      );

      // Alternative method using DebugElement
      expect(
        debugEl.query(By.css('[well-title]')).nativeElement.textContent
      ).toContain('Session 1');
    });
  });
});
