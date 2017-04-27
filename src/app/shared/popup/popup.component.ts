import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  animations: [
    trigger('animDialog', [
      state('void', style({opacity: 0, transform: 'translate(-200%, -200%) scale(.2) rotate(0)'})),
      state('*', style({opacity: 1, transform: 'translate(0, 0) scale(1) rotate(720deg)'})),
      transition('* <=> *', animate('.3s linear'))
    ]),
    trigger('animBacking', [
      state('void', style({backgroundColor: 'rgba(0, 0, 0, 0)'})),
      state('*', style({backgroundColor: 'rgba(0, 0, 0, .7)'})),
      transition('* <=> *', animate('.6s linear'))
    ])
  ]
})
export class PopupComponent implements OnInit {
  @Input() heading: string;
  @Output() onPopupClosed = new EventEmitter<any>();

  popState: string;

  closePopup(event: MouseEvent): void {
    this.onPopupClosed.emit(event);
  }

  ngOnInit(): void {
    this.popState = 'ready';
  }
}
