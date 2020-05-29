import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'demo-app';
  over = 'over';
  header = { name: 'Demo-App' , showMenuIcon: true,
   toolbarColor: 'primary', logo : 'http://muraai.com/wp-content/uploads/2019/12/new.png'  };
  menuData = [{ name: 'DashBoard', isExpanded: false, icon: 'home', showExpendIcon: true,
   subMenu: [{ name: 'sub menu', icon: 'home'}]}, { name: 'Home2', icon: 'home'} ] ;

  @ViewChild('sidenav') sidenav: MatSidenav;
 constructor() {

 }
  ngOnInit(): void {
  }

  changeRouteLink(event) {
    console.log(event);
  }
}
