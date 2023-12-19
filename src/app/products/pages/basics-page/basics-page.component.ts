import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent implements OnInit {
  public nameLower: string = "david";
  public nameUpper: string = "DAVID";
  public fullname: string = "DaViD CiCCoNI";



  constructor() { }

  ngOnInit(): void {
  }

}
