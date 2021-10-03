import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Directive({
  // Link to modal-trigger property in navbar button
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId: string;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  //   Listen for click on modal-trigger in navbar.html
  ngOnInit() {
    this.el.addEventListener('click', (e) => {
      this.$(`#${this.modalId}` as any).modal({});
    });
  }
}
