import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'mnl-commons-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Input()
  header: any;
  @Output()
  menuButonClickEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  menuClick(event) {
    this.menuButonClickEvent.emit(event);
  }
}
