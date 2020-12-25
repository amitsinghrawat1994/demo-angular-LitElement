import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menus: any[] = [
    {
      title: 'Home',
      route: 'home',
    },
    {
      title: 'News',
      route: 'news',
    },
    {
      title: 'Contact',
      route: 'contact',
    },
    {
      title: 'About',
      route: 'about',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
