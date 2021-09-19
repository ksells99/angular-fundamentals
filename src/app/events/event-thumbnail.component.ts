import { Component, OnInit, Input, Output } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  // event object passed down from parent component
  @Input() event: any;

  constructor() {}

  ngOnInit(): void {}

  getStartTimeClass(): any {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    // Apply green/bold classes if early start
    return { green: isEarlyStart, bold: isEarlyStart };

    // Can also return array of classes instead
    //
    //      if (this.event && this.event.time === '8:00 am')
    //        return ['green', 'bold']
    //      return []
  }
}
