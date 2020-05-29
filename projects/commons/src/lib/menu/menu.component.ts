import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mnl-commons-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  menuData: any;

  @Output()
  menuSideNavClickEvent: EventEmitter<any> = new EventEmitter<any> ();
  constructor() { }

  ngOnInit(): void {
  }
  onSidenavClose(menu) {
    this.menuSideNavClickEvent.emit(menu);
  }
}
