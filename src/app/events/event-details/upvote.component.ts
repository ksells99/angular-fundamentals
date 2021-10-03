import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css'],
})
export class UpvoteComponent implements OnInit {
  @Input() count: number;
  // Voted input from session-list component
  // Also sets iconColour prop to red/white depending on whether user has voted or not
  @Input() set voted(val: any) {
    this.iconColour = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();

  iconColour: string;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.vote.emit({});
  }
}
