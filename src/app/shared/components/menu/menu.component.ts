import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: "Texts and dates",
            icon: "pi pi-align-left",
            routerLink: "basics"
          },
          {
            label: "Numbers",
            icon: "pi pi-dollar",
            routerLink: "numbers"
          },
          {
            label: "Uncommons",
            icon: "pi pi-globe",
            routerLink: "uncommon"
          },
        ]
      },
      {
        label: "Custom pipes",
        icon: "pi pi-cog",
        items: [
          {
            label: "Another element",
            icon: "pi pi-cog",
          }
        ]
      }
    ];
  }

}
