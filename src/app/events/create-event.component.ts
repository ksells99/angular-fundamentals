import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '.';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  newEvent: any;
  isDirty = true;

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {}

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
